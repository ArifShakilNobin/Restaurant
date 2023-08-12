import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Attachment } from '../../../models/attachment';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss'],
})
export class MenuCreateComponent {
  isVisible = false;
  isVisibleForAttachment = false;
  fileList: any[] = [];
  previewAttachments: Attachment[] = [];
  imageTypeArray: string[] = ['jpg', 'jpeg', 'png'];

  imageView!: boolean;
  isImageLoading!: boolean;
  imageURL: any;
  @ViewChild('myInput') fileElement!: ElementRef;
  isFileUpload = false;

  saveBtnDisabled: boolean = false;
  constructor(
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NzNotificationService,
    private sanitizer: DomSanitizer
  ) {}
  handleOkFile(): void {
    this.isVisibleForAttachment = false;
  }

  handleCancelFile(): void {
    this.isVisibleForAttachment = false;
  }

  uploadFiles(event: any) {
    if (event.target.files.length > 0) {
      let totalUploadfiles = event.target.files.length + this.previewAttachments.length;
      if (totalUploadfiles > 5) {
        this.notification.error('Error', "Can't upload more than 5 files");
        this.fileElement.nativeElement.value = null;
        return;
      }
      event.target?.files?.forEach((item: any, index: number) => {
        this.fileList.push(item);
        this.previewAttachments.push({
          fileName: item.name,
          fileObjectUrl: URL.createObjectURL(item),
          fileUrl: '',
          fileType: this.getFileTypeFromNewAttachment(item.type),
          fileIndex: this.fileList.length - 1,
          isPreviousFile: false,
        });
      });
      this.fileElement.nativeElement.value = null;
      this.isFileUpload = true;
      this.saveBtnDisabled = false;
    }
  }

  getFileTypeFromNewAttachment(fileType: string) {
    let contentType = '';
    if (fileType.match(/image/)) {
      contentType = 'image';
    } else if (fileType == 'application/pdf') {
      contentType = 'pdf';
    } else {
      contentType = 'other';
    }
    return contentType;
  }
}
