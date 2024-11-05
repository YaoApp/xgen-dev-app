import { Exception, FS } from "@yao/runtime";

/**
 * Download markdown file by name
 * yao run scripts.download.Markdown README.md
 * curl -vv http://localhost:5099/api/download/README.md
 * @param name
 */
function Markdown(name: string) {
  const fs = new FS(`app`); // app is the application root directory
  //   const fs = new FS("data"); // data is the application data directory
  const filename = `${name}`;
  const ext = fs.ExtName(filename);
  if (ext !== "md") {
    throw new Exception(`File is not markdown: ${filename}`, 400);
  }

  if (!fs.Exists(filename)) {
    throw new Exception(`File not found: ${filename}`, 404);
  }

  return fs.Download(filename);
}
