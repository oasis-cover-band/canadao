import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-group-page-users-element',
  templateUrl: './group-page-users-element.component.html',
  styleUrls: ['./group-page-users-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageUsersElementComponent {
  @Input() users!: User[];

  constructor(
    private router: Router
  ) {
    
  }

  userTrackBy(index: number, user: User): string {
    return user.id;
  }

  goToProfile(userId: string) {
    this.router.navigate([{outlets: {main: ['user', userId]}}]);
  }
}
