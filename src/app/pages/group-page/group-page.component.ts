import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageComponent {
  group!: Group;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.activatedRoute.params.subscribe((params) => {
      this.group = this.dataService.getGroup(params['groupId']);
    })
  }
}
