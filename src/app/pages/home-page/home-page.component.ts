import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

  questions: BehaviorSubject<Question[]> = this.dataService.questions;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;

  constructor(
    private dataService: DataService
  ) {}

  questionTrackBy(index: number, question: Question): number {
    return question.id;
  }
}
