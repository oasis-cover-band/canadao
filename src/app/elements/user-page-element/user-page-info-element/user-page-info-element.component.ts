import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-page-info-element',
  templateUrl: './user-page-info-element.component.html',
  styleUrls: ['./user-page-info-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageInfoElementComponent {
  @Input() user!: User;
}
