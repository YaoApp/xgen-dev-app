/**
 * Custom Upload component
 * @param file
 */
function Upload(file) {
  // Replace this with your own upload logic
  const fs = new FS("system");
  const tmpfile = file.tempFile;
  const ext = fs.ExtName(file.name);
  const path = `/videos/${new Date().getTime()}.${ext}`;
  const data = fs.ReadFileBase64(tmpfile);
  fs.WriteFileBase64(path, data);
  return path;
}

// Yao Runtime dependency
// This is a fake implementation of Process and not loaded in the runtime
// Just for the purpose of type checking
// import this type from @yaoapp/types after v0.10.4 is released
class FS {
  constructor(name: string) {}
  ReadFileBase64(...args): string {
    return "";
  }
  WriteFileBase64(...args) {}
  ExtName(path: string): string {
    return "";
  }
}
