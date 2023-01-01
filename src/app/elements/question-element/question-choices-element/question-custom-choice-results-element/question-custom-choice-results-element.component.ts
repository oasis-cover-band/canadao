import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-custom-choice-results-element',
  templateUrl: './question-custom-choice-results-element.component.html',
  styleUrls: ['./question-custom-choice-results-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCustomChoiceResultsElementComponent {
  @Input() question!: Question;

  options: any;
}
