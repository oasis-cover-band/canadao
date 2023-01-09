import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-page-delegation-statistics-element',
  templateUrl: './user-page-delegation-statistics-element.component.html',
  styleUrls: ['./user-page-delegation-statistics-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageDelegationStatisticsElementComponent implements OnInit {
  @Input()
  public set user(value: User) {
    this._user = value;
  }

  public get user(): User {
    return this._user;
  }

  private _user!: User;
  delegatesToName!: string;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.delegatesToName = this.dataService.getUser(this.user.delegatedToId)?.name;
  }
}
