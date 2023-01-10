import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-choice-results-list-element',
  templateUrl: './question-choice-results-list-element.component.html',
  styleUrls: ['./question-choice-results-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionChoiceResultsListElementComponent implements OnInit {
  @Input() question!: Question;

  totalVotes: number = 0;
  
  ngOnInit(): void {
    this.calculateChoices();
  }
  calculateChoices(): void {
    for (let index = 0; index < this.question.optionsCount.length; index++) {
      this.totalVotes += this.question.optionsCount[index];
    }
  }

  optionTrackBy(index: number, option: string): string {
    return option;
  }
}
