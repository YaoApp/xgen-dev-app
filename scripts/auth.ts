// Yao Runtime dependency
// This is a fake implementation of Process and not loaded in the runtime
// Just for the purpose of type checking
// import this type from @yaoapp/types after v0.10.4 is released
import { Process, Exception } from "./__types/yao";

/**
 * Xgen Auto Login
 * This script is used to authenticate the user, set session and return the user data
 * It runnings in the server side
 *
 * tests:
 *   yao run scripts.auth.AutoLogin  # success login
 *   yao run scripts.auth.AutoLogin '::{"fake":"invalid"}' # invalid username or password
 */
function AutoLogin(payload: Record<string, any>) {
  payload = payload || {};

  // Custom user authentication logic
  if (payload.fake == "invalid") {
    throw new Exception("Invalid username or password", 401);
  }

  // Get user data
  const user = Process("models.admin.user.Find", 1, {
    select: ["id", "name", "email", "mobile"],
  });

  // Get user menus
  const menus = Process("flows.menu") as Menus;

  // Generate JWT token
  const sid = Process("utils.str.uuid");
  const ttl = 28800; // 8 hours

  // Process utils.jwt.Make <id> <payload> [option]
  // option: {"subject":"<subject>", "audience": "<audience>", "issuer":"<issuer>", "timeout": "<timeout in seconds>", "sid":"<session ID>"}
  const jwt = Process(
    "utils.jwt.Make",
    user.id,
    { name: user.name, type: user.type },
    {
      sid: sid,
      timeout: ttl,
      issuer: "custom-login",
      subject: "Custom",
      audience: "Custom",
    }
  ) as JWT;

  // Set Session
  Process("session.SetMany", { user_id: user.id, user, menus }, ttl, sid);

  // Mask sensitive info
  const publicUser = maskSensitiveInfo(user);

  // Login Data
  const data: LoginData = {
    sid: sid,
    token: jwt.token,
    expires_at: jwt.expires_at,
    user: publicUser,
    entry: "/x/Table/hero",
    logout_redirect: "/autologin.html",
    menus,
  };

  // Set studio token (optional)

  // Return login data
  return {
    base64: btoa(encodeURIComponent(JSON.stringify(data))),
    data: data,
  };
}

/**
 * Mask sensitive info
 * @param input
 * @returns
 */
function maskSensitiveInfo(input: User): User {
  // Mask Mobile Number
  if (input.mobile) {
    input.mobile = input.mobile.replace(/\b(\d{3})\d{4}(\d{4})\b/g, "$1****$2");
  }

  // Mask Email Address
  if (input.email) {
    input.email = input.email.replace(
      /\b([0-9a-zA-Z_\-]{1})\w+@(\w+)\.(\w+)\b/g,
      "$1***@$2.$3"
    );
  }

  if (input.password) {
    delete input.password;
  }

  if (input.password2nd) {
    delete input.password2nd;
  }

  return input;
}

/**
 * JWT Token
 */
type JWT = { token: string; expires_at: number };

/**
 * Login Data
 */
type LoginData = {
  sid: string;
  expires_at: number;
  token: string;
  user: User;
  menus: Menus;
  entry?: string;
  logout_redirect?: string | boolean;
  studio?: { expires_at: number; port: number; token: string };
};

type User = {
  id: number;
  email?: string;
  name?: string;
  mobile?: string;
  [key: string]: any;
};

/**
 * Menus
 */
type Menus = { items: Array<MenuItem>; setting?: Array<MenuItem> };

/**
 * Menu item
 */
type MenuItem = {
  name: string;
  path: string;
  badge?: number;
  icon?: string;
  children?: Array<MenuItem>;
};
