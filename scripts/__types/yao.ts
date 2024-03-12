export function Process(name: string, ...args: any): any {
  return null;
}

export function Exception(message: string, code: number, ...args: any) {}

export class FS {
  constructor(name: string) {}

  ReadFileBase64(...args): string {
    return "";
  }

  WriteFileBase64(...args) {}

  ExtName(path: string): string {
    return "";
  }
}
