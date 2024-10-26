import { Exception, FS, UploadFile, UploadFileResponse } from "@yao/runtime";

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

  const filename = `/${tempdir()}/${name()}.${ext}`;
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
function tempdir(): string {
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
