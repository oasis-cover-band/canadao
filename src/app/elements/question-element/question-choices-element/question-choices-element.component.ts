import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ngIfHeightAnimations, ngIfScaleAnimations } from 'src/app/animations';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-choices-element',
  templateUrl: './question-choices-element.component.html',
  styleUrls: ['./question-choices-element.component.scss'],
  animations: [
    ngIfScaleAnimations
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionChoicesElementComponent {
  @Input() question!: Question;
  @Input() alreadyVoted!: boolean;
  @Input() loggedInAs!: User;
  @Output() voted: EventEmitter<number> = new EventEmitter<number>();

  vote(choiceIndex: number) {
    this.voted.emit(choiceIndex);
  }
}
