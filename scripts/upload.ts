import {
  Exception,
  FS,
  Process,
  UploadFile,
  UploadFileResponse,
} from "@yao/runtime";

/**
 * Upload image to public
 * @param file
 * @param props
 * @returns string | Record<string, any>
 */
function ImageToPublic(file: UploadFile): UploadFileResponse {
  const root = `/public/assets/upload/images`;
  const fs = new FS("app"); // root path is the application root directory
  const tmpfile = file.tempFile;
  const ext = fs.ExtName(file.name);

  // Check the file name jpg, jpeg, png, svg, gif, webp
  if (!/^(jpg|jpeg|png|svg|gif|webp)$/i.test(ext)) {
    throw new Exception(
      "File format not supported, please select an image file",
      400
    );
  }

  const filename = `/${dir()}/${name()}.${ext}`;
  const target = `${root}${filename}`;
  fs.Move(tmpfile, target);

  // If not have additional information, return the path directly
  return filename;
}

/**
 * Upload image to public with additional information
 * @param file
 * @returns
 */
function ImageToPublicWithAdditional(file: UploadFile): UploadFileResponse {
  const filename = ImageToPublic(file);
  return {
    path: filename as string,
    additional: "additional information",
  };
}

/**
 * Upload file to public, support chunk upload
 * @param file
 * @returns
 */
function Chunk(file: UploadFile): UploadFileResponse {
  if (!file.range) {
    throw new Exception("Get error response. range is empty", 500);
  }

  if (!file.sync) {
    throw new Exception("async upload is not supported yet", 500);
  }

  const root = `/public/assets/upload/chunks`;
  const fs = new FS("app"); // root path is the application root directory
  const tmpfile = file.tempFile;
  const ext = fs.ExtName(file.name);
  const filename = `/${hash(file.uid || file.tempFile)}.${ext}`;
  const target = `${root}${filename}`;
  fs.MoveAppend(tmpfile, target);

  // Get total size
  const size = fs.Size(target);
  const total = parseInt(file.range.split("/")[1]);

  // Check the file size
  if (size != 0 && size == total) {
    return filename; // Return the file path
  }

  // Return the upload progress
  return {
    path: filename,
    uid: file.uid,
    progress: { total: total, uploaded: size, completed: false },
  };
}

/**
 * Error response
 * @param file
 */
function ErrorResponse(file: UploadFile) {
  throw new Exception(`Get error response. name: ${file.name}`, 500);
}

/**
 * Generate a random directory name
 * @returns
 */
function name(): string {
  const random = Math.floor(Math.random() * 100000) + 1;
  return `${new Date().getTime()}${random}`;
}

/**
 * Generate a temporary directory name
 * @returns
 */
function dir(): string {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();

  // Format the date to YYYYMMDD
  const formattedDate: string = `${year}${month
    .toString()
    .padStart(2, "0")}${day.toString().padStart(2, "0")}`;
  return formattedDate;
}

function hash(input: string): string {
  const hash = Process("yao.crypto.hash", "MD5", input);
  return `${hash[0]}${hash[1]}/${hash[2]}${hash[3]}/${hash}`;
}
