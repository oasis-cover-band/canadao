import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-choice-results-list-item-element',
  templateUrl: './question-choice-results-list-item-element.component.html',
  styleUrls: ['./question-choice-results-list-item-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionChoiceResultsListItemElementComponent {
  @Input() optionName!: string;
  @Input() optionValue!: number;
  @Input() totalVotes!: number;
}
