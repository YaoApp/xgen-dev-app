export function Process(name: string, ...args: any): any {
  return null;
}

export function Exception(message: string, code: number, ...args: any) {}

export const log = {
  Trace(message: string, ...args: any) {},
  Error(message: string, ...args: any) {},
  Info(message: string, ...args: any) {},
};

export class Query<T> {
  constructor(name: string) {}
  Get(...args): T[] {
    return [];
  }
  Paginate(params: QueryParams): SearchResult<T> {
    return {} as SearchResult<T>;
  }
}

export type Options = Option[];

export type Option = {
  label: string;
  value: string | number | boolean;
  color?: string;
  [key: string]: any;
};

export type QueryParams = {
  wheres?: Where[];
  orders?: Order[];
  withs?: Record<string, With>;
} & Record<string, any>;

export type With = {
  query?: QueryParams;
};

export type Where = {
  method?: "where" | "orwhere";
  column?: string;
  value?: any;
  wheres?: Where[];
  op?:
    | "eq"
    | "in"
    | "like"
    | "gt"
    | "lt"
    | "gte"
    | "lte"
    | "notnull"
    | "null"
    | "match"
    | "notmatch";
};

export type Order =
  | {
      column: string;
      option?: "asc" | "desc";
    }
  | string;

export type SearchResult<T> = {
  code?: number;
  message?: string;
  data: T[] | [];
  items?: T[] | [];
  page: number;
  pagecnt: number;
  pagesize: number;
  total: number;
  next: number;
  prev: number;
};

export type Error = {
  code: number;
  message: string;
};

export const time = {
  Sleep(ms: number) {},
  After(ms: number, process: string, ...args: any) {},
};

export class Store {
  constructor(name: string) {}
  Get(key: string): any {
    return null;
  }
  GetDel(key: string): any {
    return null;
  }
  Set(key: string, value: any, tls?: number) {}
  Del(key: string) {}
  Clear() {}
}

export type HmacOption = {
  key?: "base64" | "hex";
  value?: "base64" | "hex";
  output?: "base64" | "hex";
};

export type StoreInstance = {};

export type HttpResponse = {
  code: number;
  status: number;
  data: any;
  headers: Record<string, string[]>;
  message?: string;
};

export class FS {
  constructor(name: string) {}
  WriteFile(...args) {}
  ReadFile(...args): any {}
  ReadDir(path: string, recursive: boolean = false): string[] {
    return [];
  }
  Download(path: string): { content: ReadCloser; type: MimeType } {
    return { content: 0, type: "" };
  }
  Zip(source: string, destination: string) {}
  MkdirAll(path: string) {}
  DirName(path: string): string {
    return "";
  }

  Exists(...args): boolean {
    return false;
  }

  IsDir(...args): boolean {
    return false;
  }

  ReadFileBuffer(...args): any {}
  ReadFileBase64(...args): string {
    return "";
  }
  WriteFileBase64(...args) {}
  ExtName(name: string): string {
    return "";
  }
  BaseName(name: string): string {
    return "";
  }
  Copy(source: string, destination: string) {}
  Move(source: string, destination: string) {}
  Size(path: string): number {
    return 0;
  }
  MoveAppend(source: string, destination: string) {}
  Remove(path: string) {}
  RemoveAll(path: string) {}
  MimeType(name: string): string {
    return "";
  }
}

export const http = {
  // args[0] URL
  // args[1] Query Params <Optional> {"k1":"v1", "k2":"v2"}, ["k1=v1","k1"="v11","k2"="v2"], [{"k1":"v1"}, {"k2":"v2"}], k1=v1&k2=v2&k3=k3
  // args[2] Headers <Optional> {"K1":"V1","K2":"V2"}  [{"K1":"V1"},{"K1":"V11"},{"K2":"V2"}]
  Get(url: string, query?: any, headers?: any): HttpResponse {
    return {} as HttpResponse;
  },

  // http.Post(...args)
  // args[0] URL
  // args[1] Payload <Optional> {"foo":"bar"} ["foo", "bar", {"k1":"v1"}], "k1=v1&k2=v2", "/path/root/file", ...
  // args[2] Files   <Optional> {"foo":"/path/root/file"}
  // args[3] Query Params <Optional> {"k1":"v1", "k2":"v2"}, ["k1=v1","k1"="v11","k2"="v2"], [{"k1":"v1"},{"k1":"v11"},{"k2":"v2"}], k1=v1&k1=v11&k2=k2
  // args[4] Headers <Optional> {"K1":"V1","K2":"V2"}  [{"K1":"V1"},{"K1":"V11"},{"K2":"V2"}]
  Post(
    url: string,
    payload?: any,
    files?: any,
    query?: any,
    headers?: any
  ): HttpResponse {
    return {} as HttpResponse;
  },

  // args[0] Method GET/POST/PUT/HEAD/PATCH/DELETE/...
  // args[1] URL
  // args[2] Payload <Optional> "Foo", {"foo":"bar"}, ["foo", "bar", {"k1":"v1"}], "/root/path"
  // args[3] Query Params <Optional> {"k1":"v1", "k2":"v2"}, ["k1=v1","k1"="v11","k2"="v2"], [{"k1":"v1"},{"k1":"v11"},{"k2":"v2"}], k1=v1&k1=v11&k2=k2
  // args[4] Headers <Optional> {"K1":"V1","K2":"V2"}  [{"K1":"V1"},{"K1":"V11"},{"K2":"V2"}]
  Send(
    method: string,
    url: string,
    payload: any,
    query: any,
    headers: any,
    files?: File[]
  ): HttpResponse {
    return {} as HttpResponse;
  },
};

export type File = {
  name: string;
  path: string;
  data: string;
};

export const SetSid = function (sid: string) {};
export const SetGlobal = function (data: Record<string, any>) {};
export const Abort = function () {};
export const Redirect = function (code: number, url: string) {};
export const Cookie = function (name: string): string {
  return "";
};
export const SetCookie = function (
  name: string,
  value: string,
  maxAge: number,
  path: string,
  domain: string,
  secure: boolean,
  httpOnly: boolean
) {};

// {
//   "code": 200,
//   "data": "eyJhY2Nlc3NfdG9rZW4iOiI3Ml8tQXIyNVhpR1VKdllDRUg3ZDRlRlJqNWZLVkdfWW1yMGNkZkNMSlJ0YXFMOHhqMTVQZk9WN2JlNmc4YjcyYkpESktLRmZtVmVZZFg3WUh4amJma2tGR0haQ1R2czJGU3BfclZUNzlCVXRIcyIsImV4cGlyZXNfaW4iOjcyMDAsInJlZnJlc2hfdG9rZW4iOiI3Ml85aGV4SWJyVV9oTEdDdWlFZzdxOEZFVDVvdklNZDdXaEhRcFZuR1JIN3JWdE1mWi1wTkctWDlpb1VsaTdNbHFKZEpua0VSLWZXMWY1WXNTb3JqbkZkQUtEMnVNc04xN0ROTGt5R0hReUJ2TSIsIm9wZW5pZCI6Im9GTVI0cy1BaGk0VUl3NzFqd2ZJZ1JHcGhkZEUiLCJzY29wZSI6InNuc2FwaV91c2VyaW5mbyIsInVuaW9uaWQiOiJvN2RXVHVCMnZTNzVpcVJMWGMwd3lFMjRoaTVJIn0=",
//   "headers": {
//       "Connection": [
//           "keep-alive"
//       ],
//       "Content-Length": [
//           "383"
//       ],
//       "Content-Type": [
//           "text/plain"
//       ],
//       "Date": [
//           "Fri, 08 Sep 2023 06:07:37 GMT"
//       ]
//   },
//   "message": "",
//   "status": 200
// }

export type FormDSL = {
  name?: string; // 表单名称
  action?: { bind?: { model?: string; table?: string } };
  layout: {
    primary: number | string;
    form: {
      sections: FormDSLSection[];
    };
  };
  fields: {
    form: Record<string, FormDSLField>;
  };
};

export type FormDSLSection = { title?: string; columns: FormDSLColumn[] };
export type FormDSLColumn = {
  width: number;
  name: string;
};

export type FormDSLField = {
  bind: string;
  edit?: { type: string; props: Record<string, any> };
};

export type SuiRequest = {
  method?: string;
  body?: any;
  headers?: Record<string, string[]>;
  query?: Record<string, string[]>;
  payload?: Record<string, any>;
  params?: Record<string, string>;
  referer?: string;
  theme?: string;
  locale?: string;
  url?: {
    domain: string;
    host: string;
    path: string;
    scheme: string;
    url: string;
  };
};

export interface Helper {
  (...args: any[]): any;
}

export interface UploadFile {
  uid?: string; // Content-Uid: The unique identifier of the file (for chunk upload)
  range?: string; // Content-Range: bytes start-end/total (for chunk upload)
  sync?: boolean; // Content-Sync: sync upload or not. Default is false
  name: string;
  tempFile: string;
  size: number;
  header: { [key: string]: string[] }; // Equivalent to textproto.MIMEHeader in Go
  error?: string;
}

export interface UploadProgress {
  total: number; // total bytes to upload
  uploaded: number; // bytes uploaded
  completed: boolean;
}

/**
 * Http Exception
 */
export type HttpException = {
  code: number;
  message: string;
};

/**
 * Upload File Response
 */
export type UploadFileResponse =
  | string
  | {
      /**
       * File path or URL
       */
      path: string; // File path

      /**
       * Upload progress
       */
      progress?: UploadProgress;

      /**
       * Content-Uid: The unique identifier of the file (for chunk upload)
       */
      uid?: string;

      /**
       * additional information, can be used to previewURL, etc.
       */
      [key: string]: any;
    };

type ReadCloser = number;

type MimeType = string;
