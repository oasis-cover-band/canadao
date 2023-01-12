import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-page-groups-element',
  templateUrl: './user-page-groups-element.component.html',
  styleUrls: ['./user-page-groups-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageGroupsElementComponent {

  @Input() loggedInAs!: User;
  @Input() groups!: Group[];

  groupTrackBy(index: number, group: Group): string {
    return group.id;
  }
}
