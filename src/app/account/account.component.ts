import { Component, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private ls: LoggingService, private as: AccountService) { }

  onSetTo(status: string) {
    this.as.updateStatus(this.id, status);

    this.as.statusUpdated.emit(status);

  }
}
