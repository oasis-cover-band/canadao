import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-page-delegation-element',
  templateUrl: './user-page-delegation-element.component.html',
  styleUrls: ['./user-page-delegation-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageDelegationElementComponent {
  @Input() user!: User;
}
