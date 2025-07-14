import type { Readable } from 'node:stream';
import type { ReadStreamOptions } from 'fs-capacitor';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  // We omit the capacitor property because it's a private implementation detail that shouldn't be used outside.
  createReadStream: FileUploadCreateReadStream;
}

export type FileUploadCreateReadStream = (
  options?: FileUploadCreateReadStreamOptions | undefined,
) => Readable;

export interface FileUploadCreateReadStreamOptions {
  encoding?: ReadStreamOptions['encoding'];
  highWaterMark?: ReadStreamOptions['highWaterMark'];
}
