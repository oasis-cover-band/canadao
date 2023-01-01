import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsPageComponent {
  questions: BehaviorSubject<Question[]> = this.dataService.questions;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;

  constructor(
    private dataService: DataService
  ) {}

  questionTrackBy(index: number, question: Question): string {
    return question.id;
  }
}
