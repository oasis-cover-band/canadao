import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsPageComponent {
  groups: BehaviorSubject<Group[]> = this.dataService.groups;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;
  constructor(
    private dataService: DataService
  ) {}

  groupTrackBy(index: number, group: Group): string {
    return group.id;
  }
}
