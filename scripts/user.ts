// Yao Runtime dependency
// This is a fake implementation of Process and not loaded in the runtime
// Just for the purpose of type checking
// import this type from @yaoapp/types after v0.10.4 is released
import { Process } from "./__types/yao";

/**
 * Custom user login
 * @param payload
 * @returns
 */
function Login(payload: Record<string, any>) {
  let info = Process("yao.login.Admin", payload);
  info["logout_redirect"] = "/?foo=bar"; // info["logout_redirect"] = "https://yaoapps.com";
  return info;
}
