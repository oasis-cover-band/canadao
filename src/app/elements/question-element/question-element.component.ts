import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-element',
  templateUrl: './question-element.component.html',
  styleUrls: ['./question-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionElementComponent {
  @Input() question!: Question;
}
