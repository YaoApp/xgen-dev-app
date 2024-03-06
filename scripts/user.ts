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
