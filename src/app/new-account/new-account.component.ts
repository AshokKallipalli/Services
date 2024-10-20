import { Component } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private as: AccountService) {
    this.as.statusUpdated.subscribe((status) => alert('New Status : ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.as.addAccount(accountName, accountStatus)
  }
}
