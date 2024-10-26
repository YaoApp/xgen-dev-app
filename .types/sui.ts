export const __m = function (message: string): string {
  return "";
};

export const __sui_data: Record<string, any> = {};

// @ts-ignore: Ignore the specific error
export const arguments: any[] = [];

// Locale is the struct for the locale
export interface Locale {
  name?: string;
  keys?: { [key: string]: string };
  messages?: { [key: string]: string };
  direction?: "ltr" | "rtl";
  timezone?:
    | "-12:00"
    | "-11:00"
    | "-10:00"
    | "-09:30"
    | "-09:00"
    | "-08:00"
    | "-07:00"
    | "-06:00"
    | "-05:00"
    | "-04:30"
    | "-04:00"
    | "-03:30"
    | "-03:00"
    | "-02:00"
    | "-01:00"
    | "+00:00"
    | "+01:00"
    | "+02:00"
    | "+03:00"
    | "+03:30"
    | "+04:00"
    | "+04:30"
    | "+05:00"
    | "+05:30"
    | "+05:45"
    | "+06:00"
    | "+06:30"
    | "+07:00"
    | "+08:00"
    | "+08:45"
    | "+09:00"
    | "+09:30"
    | "+10:00"
    | "+10:30"
    | "+11:00"
    | "+12:00"
    | "+12:45"
    | "+13:00"
    | "+14:00";
}

export type Component = {
  root: HTMLElement;
  state: ComponentState;
  store: ComponentStore;
  $root: SUIQuery;
  find: (selector: string | HTMLElement) => SUIQuery | null;
  query: (selector: string) => HTMLElement | null;
  queryAll: (selector: string) => NodeListOf<Element> | null;
  emit: (name: string, detail?: EventData) => void;
  render: (
    name: string,
    data: Record<string, any>,
    option?: RenderOption
  ) => Promise<string>;
  once?: () => void;
  watch?: Record<string, (value?: any) => void>;
  Constants?: Record<string, any>;
  [key: string]: any;
};

export type RenderOption = {
  target?: HTMLElement; // default is same with s:render target
  showLoader?: HTMLElement | string | boolean; // default is false
  replace?: boolean; // default is true
  withPageData?: boolean; // default is false
};

export type ComponentState = {
  Set: (key: string, value?: any) => void;
};

export type ComponentStore = {
  Get: (key: string) => string;
  Set: (key: string, value: string) => void;
  GetJSON: (key: string) => any;
  SetJSON: (key: string, value: any) => void;
  GetData: () => Record<string, any>;
};

// $$ is a helper function to get the component from the root element or selector
/**
 * Is a helper function to get the component from the root element or selector
 * @param selector - The root element or selector
 * @returns
 */
export const $$ = function (selector: HTMLElement | string): Component {
  return {} as Component;
};

/**
 * EventDetail is the struct for the event detail
 * @param rootElement - The root element of the component
 * @param targetElement - The target element of the event
 */
export type EventDetail<T = HTMLElement> = {
  rootElement: HTMLElement;
  targetElement: T;
};

/**
 * EventData is the struct for the event data
 */
export type EventData = Record<string, any>;

export type State = {
  target: HTMLElement;
  stopPropagation();
};

/**
 * Create a new SUIRender instance with the component and option
 * @param component the component or component selector
 * @param option the render option
 * @returns SUIRender object
 */
export function $Render(
  component: Component | string,
  option?: RenderOption
): SUIRender {
  return new SUIRender(component, option);
}

class SUIRender {
  comp = null;
  option = null;
  constructor(comp, option) {
    this.comp = comp;
    this.option = option;
  }

  /**
   * Exec executes the partial view with the data
   * @param name - The name of the partial view with s:render attribute value
   * @param data - The data to render the partial view
   * @returns Promise<string> - The rendered partial html or error message
   */
  async Exec(name: string, data: Record<string, any>): Promise<string> {
    // @ts-ignore
    return __sui_render(this.comp, name, data, this.option);
  }
}

/**
 * Get store of the element
 * @param selector - The element or selector to get the store
 * @returns
 */
export function $Store(selector: HTMLElement | string): ComponentStore | null {
  return null;
}

/**
 * Query the element with the selector and return the SUIQuery object
 * @param selector
 * @returns SUIQuery object
 */
export function $Query(selector: string | HTMLElement): SUIQuery {
  return new SUIQuery(selector);
}

export class SUIQuery {
  selector: string | Element = "";
  element: Element | null = null;
  elements: NodeListOf<Element> | null = null;
  constructor(selector: string | Element) {}

  /**
   * Iterate over the elements and call the callback function
   * @param callback (element: SUIQuery, index: number) => void
   * @returns
   */
  each(callback: (element: SUIQuery, index: number) => void) {
    return;
  }

  /**
   * Get the element
   * @returns
   */
  elm(): Element | null {
    return this.element;
  }

  /**
   * Get the elements
   * @returns
   */
  elms(): NodeListOf<Element> | null {
    return this.elements;
  }

  /**
   * Find the element with the selector
   * @param selector
   * @returns
   */
  find(selector: string): SUIQuery | null {
    return new SUIQuery(this.element?.querySelector(selector) || "");
  }

  /**
   * Find the closest element with the selector
   * @param selector
   * @returns
   */
  closest(selector: string): SUIQuery | null {
    return new SUIQuery(this.element?.closest(selector) || "");
  }

  /**
   * Add the event listener to the element
   * @param event
   * @param callback
   * @returns
   */
  on(event: string, callback: (event: Event) => void): SUIQuery {
    return this;
  }

  /**
   * Get the component of the element
   * @returns
   */
  $$(): Component {
    if (!this.element) {
      return null;
    }
    const root = this.element.closest("[s\\:cn]");
    if (!root) {
      return null;
    }

    // @ts-ignore
    return $$(root);
  }

  /**
   * Get the store of the element
   * @returns ComponentStore | null
   */
  store(): ComponentStore | null {
    return null;
  }

  /**
   * Get the attribute value of the element
   * @param name - The attribute name
   * @returns string | null - The attribute value or null
   */
  attr(name: string): string | null {
    return null;
  }

  /**
   * Get the data value of the element
   * @param name - The data name
   * @returns string | null - The data value or null
   * @returns
   */
  data(name: string): string | null {
    return null;
  }

  /**
   * Get the json value of the element
   * @param name - The json name
   * @returns any | null - The json value or null
   */
  json(name: string): any | null {
    return null;
  }

  /**
   * Check if the element has the class name
   * @param className - The class name
   * @returns boolean - True if the element has the class name
   */
  hasClass(className: string): boolean {
    return false;
  }

  /**
   * Get the property value of the element
   * @param name - The property name
   * @returns any | null - The property value or null
   */
  prop(name: string): any | null {
    return null;
  }

  /**
   * Remove the class name from the element
   * @param className - The class name or class names to remove. eg. "class1 class2" or ["class1", "class2"]
   * @returns SUIQuery for chaining
   */
  removeClass(className: string | string[]): SUIQuery {
    return this;
  }

  /**
   * Toggle the class name of the element
   * @param className
   */
  toggleClass(className: string | string[]): SUIQuery {
    return this;
  }

  /**
   * Add the class name to the element
   * @param className  - The class name or class names to add. eg. "class1 class2" or ["class1", "class2"]
   * @returns  SUIQuery for chaining
   */
  addClass(className: string | string[]): SUIQuery {
    return this;
  }

  /**
   * Get or Set the inner html of the element
   * @param html - The html content to set, if not provided, get the inner html
   * @returns SUIQuery | string - The SUIQuery object or the inner html content
   */
  html(html?: string): SUIQuery | string {
    return this;
  }
}

/**
 * Call the backend function with the method and data
 * @param route - The page route of the backend, if not provided, use the current page route
 * @returns SUIBackend the backend object
 */
export function $Backend<T = any>(
  route?: string,
  headers?: [string, string][] | Record<string, string> | Headers
): SUIBackend {
  return new SUIBackend<T>(route, headers);
}

/**
 * SUIBackend is the struct for the backend
 */
export class SUIBackend<T = any> {
  route = "";
  headers: [string, string][] | Record<string, string> | Headers = {};
  constructor(
    route: string,
    headers: [string, string][] | Record<string, string> | Headers
  ) {
    this.route = route;
    this.headers = headers;
  }

  /**
   * Call the backend function which has Api prefix defined in the backend script file
   * @param method the method name of the backend function. eg. "GetPets" defined in the backend script file as "ApiGetPets"
   * @param args the arguments of the backend function
   */
  async Call(method: string, ...args: any): Promise<T> {
    return {} as T;
  }
}

/**
 * YAO Pure JavaScript SDK
 * @auth Max<max@iqka.com>
 * @maintainer https://yaoapps.com
 */

export interface Headers {
  [key: string]: string;
}

export interface FetchOptions {
  method: string;
  mode: RequestMode;
  cache: RequestCache;
  credentials: RequestCredentials;
  headers: Headers;
  redirect: RequestRedirect;
  body?: string;
}

/**
 * Yao Object
 * @param {string} host
 */
export class Yao {
  host: string;
  query: { [key: string]: string };

  constructor(host?: string) {
    this.host = `${
      host || window.location.protocol + "//" + window.location.host
    }/api`;
    this.query = {};
    new URLSearchParams(window.location.search).forEach((value, key) => {
      this.query[key] = value;
    });
  }

  /**
   * Get API
   * @param {string} path
   * @param {object} params
   * @param {Headers} headers
   */
  async Get(path: string, params?: object, headers?: Headers) {
    return this.Fetch("GET", path, params, null, headers);
  }

  /**
   * Post API
   * @param {string} path
   * @param {object} data
   * @param {object} params
   * @param {Headers} headers
   */
  async Post(path: string, data?: object, params?: object, headers?: Headers) {
    return this.Fetch("POST", path, params, data, headers);
  }

  /**
   * Download API
   * @param {string} path
   * @param {object} params
   * @param {string} savefile
   * @param {Headers} headers
   */
  async Download(
    path: string,
    params: object,
    savefile: string,
    headers?: Headers
  ) {
    try {
      const blob = await this.Fetch("GET", path, params, null, headers, true);
      const objectUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      document.body.appendChild(anchor);
      anchor.href = objectUrl;
      anchor.download = savefile;
      anchor.click();
      window.URL.revokeObjectURL(objectUrl);
    } catch (err) {
      alert("成功创建导出任务!");
    }
  }

  /**
   * Fetch API
   * @param {string} method
   * @param {string} path
   * @param {object} params
   * @param {object} data
   * @param {Headers} headers
   * @param {boolean} isblob
   */
  async Fetch(
    method: string,
    path: string,
    params?: object,
    data?: object,
    headers?: Headers,
    isblob?: boolean
  ): Promise<any> {
    params = params || {};
    headers = headers || {};
    data = data || null;

    let url = `${this.host}${path}`;
    const queryString = this.Serialize(params);
    if (queryString != "") {
      url = url.includes("?")
        ? `${url}&${queryString}`
        : `${url}?${queryString}`;
    }

    const token = this.Token();
    if (token != "") {
      headers["authorization"] = `Bearer ${token}`;
    }

    if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    const options: FetchOptions = {
      method: method,
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: headers,
      redirect: "follow", // manual, *follow, error
    };

    if (data != null) {
      options.body = JSON.stringify(data);
    }

    const resp = await fetch(url, options);
    const type = resp.headers.get("Content-Type") || "";
    if (type.includes("application/json")) {
      try {
        return await resp.json();
      } catch (err) {
        return { code: resp.status, message: "empty return" };
      }
    } else if (isblob) {
      return resp.blob();
    } else if (type.includes("text/html") || type.includes("text/plain")) {
      return resp.text();
    }
    return resp.text();
  }

  /**
   * Token API
   */
  Token(): string {
    const token = sessionStorage.getItem("token") || "";
    if (token == "") {
      return this.Cookie("__tk") || "";
    }
    return token;
  }

  /**
   * Get Cookie
   * @param {string} cookieName
   * @returns {string | null}
   */
  Cookie(cookieName: string): string | null {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  /**
   * Set Cookie
   * @param {string} cookieName
   * @param {string} cookieValue
   * @param {number} [expireDays]
   */
  SetCookie(cookieName: string, cookieValue: string, expireDays?: number) {
    expireDays = expireDays || 30;
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  /**
   * Delete Cookie
   * @param {string} cookieName
   */
  DeleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  /**
   * Serialize To Query String
   * @param {object} obj
   * @returns {string}
   */
  Serialize(obj: { [key: string]: any }): string {
    const str: string[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }
}
