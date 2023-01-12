import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  togglingMembership: boolean = false;

  constructor(
    private router: Router
  ) {

  }
  
  groupTrackBy(index: number, group: Group): string {
    return group.id;
  }

  toggling(event: boolean): void {
    this.togglingMembership = true;
    setTimeout(() => {
      this.togglingMembership = false;
    }, 10);
  }

  goToGroup(groupId: string) {
    if (!this.togglingMembership) {
      this.router.navigate([{outlets: {main: ['group', groupId]}}]);
    }
  }
}
