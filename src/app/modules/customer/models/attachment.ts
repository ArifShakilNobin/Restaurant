import { HexBase64BinaryEncoding } from "crypto";

export interface Attachment {
    fileName: string;
    fileUrl: string | HexBase64BinaryEncoding;
    fileObjectUrl?: string,
    fileType?: string
    fileBase64?:any;
    isPreviousFile?:boolean;
    fileIndex?:number;
}
