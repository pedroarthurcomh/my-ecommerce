import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  success(title: string, content?: string): void {
    this.notification.create('success', title, content || '', {
      nzPlacement: 'bottomRight',
      nzDuration: 3000,
    });
  }

  error(title: string, content?: string): void {
    this.notification.create('error', title, content || '', {
      nzPlacement: 'bottomRight',
      nzDuration: 3000,
    });
  }

  info(title: string, content?: string): void {
    this.notification.create('info', title, content || '', {
      nzPlacement: 'bottomRight',
      nzDuration: 3000,
    });
  }

  warn(title: string, content?: string): void {
    this.notification.create('warning', title, content || '', {
      nzPlacement: 'bottomRight',
      nzDuration: 3000,
    });
  }
}
