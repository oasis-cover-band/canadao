import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-group-page-questions-element',
  templateUrl: './group-page-questions-element.component.html',
  styleUrls: ['./group-page-questions-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageQuestionsElementComponent {
  @Input() questions!: Question[];
  @Input() loggedInAs!: User;

  questionTrackBy(index: number, question: Question): string {
    return question.id;
  }
}
