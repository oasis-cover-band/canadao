import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';

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
        this.group.userIds.push(this.loggedInAs.id);
        this.alreadyMember = true;
      }
    } else {
      if (this.group.userIds.indexOf(this.loggedInAs.id) !== -1) {
        this.group.userIds.splice(this.group.userIds.indexOf(this.loggedInAs.id), 1);
        this.alreadyMember = false;
      }
    }
  }
}
