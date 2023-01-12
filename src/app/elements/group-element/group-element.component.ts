import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupElementComponent implements OnInit {
  @Input() group!: Group;
  @Input() loggedInAs!: User;

  alreadyMember: boolean = false;

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    if (this.group.userIds.indexOf(this.loggedInAs.id) === -1) {
      this.alreadyMember = false;
    } else {
      this.alreadyMember = true;
    }
  }

  toggleGroupMembership(event: boolean) {
    if (event) {
      if (this.group.userIds.indexOf(this.loggedInAs.id) === -1) {
        this.loggedInAs.groupIds.push(this.group.id);
        const user = this.dataService.getUser(this.loggedInAs.id);
        user.groupIds.push(this.group.id);
        this.group.userIds.push(this.loggedInAs.id);
        this.alreadyMember = true;
      }
    } else {
      if (this.group.userIds.indexOf(this.loggedInAs.id) !== -1) {
        this.loggedInAs.groupIds.splice(this.loggedInAs.groupIds.indexOf(this.group.id), 1);
        const user = this.dataService.getUser(this.loggedInAs.id);
        user.groupIds.splice(user.groupIds.indexOf(this.group.id), 1);
        this.group.userIds.splice(this.group.userIds.indexOf(this.loggedInAs.id), 1);
        this.alreadyMember = false;
      }
    }
  }
}
