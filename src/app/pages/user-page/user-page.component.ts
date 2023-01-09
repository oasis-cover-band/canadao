import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent {
  user!: User;
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
    this.activatedRoute.params.subscribe((params) => {
      this.user = this.dataService.getUser(params['userId']);
    })
  }
}
