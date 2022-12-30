import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-choices-element',
  templateUrl: './question-choices-element.component.html',
  styleUrls: ['./question-choices-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionChoicesElementComponent {
  @Input() type!: Question['type'];
}
