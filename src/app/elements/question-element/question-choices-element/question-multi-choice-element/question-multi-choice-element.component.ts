import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-multi-choice-element',
  templateUrl: './question-multi-choice-element.component.html',
  styleUrls: ['./question-multi-choice-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMultiChoiceElementComponent {
  @Input() loggedInAs!: User;
  @Output() voted: EventEmitter<number> = new EventEmitter<number>();

  vote(choiceIndex: number) {
    this.voted.emit(choiceIndex);
  }

}
