import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-question-element',
  templateUrl: './question-element.component.html',
  styleUrls: ['./question-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionElementComponent implements OnInit {
  @Input() question!: Question;
  @Input() loggedInAs!: User;

  alreadyVoted: boolean = false;

  constructor(
    private scrollService: ScrollService
  ) {

  }
  
  ngOnInit(): void {
    if (this.question.votedUsers.indexOf(this.loggedInAs.id) === -1) {
      this.alreadyVoted = false;
    } else {
      this.alreadyVoted = true;
    }
  }

  vote(optionIndex: number): void {
    this.scrollService.refresh();
    if (this.alreadyVoted === false) {
      const voteId = String(new Date().getTime() % 292992);
      this.alreadyVoted = true;
      this.loggedInAs.voteIds.push(voteId);
      this.question.votedUsers.push(this.loggedInAs.id);
      this.question.optionsCount[optionIndex]++;
      this.question.votes.push({
        id: voteId,
        userId: this.loggedInAs.id,
        questionId: this.question.id,
        questionType: this.question.type,
        voteOption: optionIndex,
        timestamp: new Date().getTime()
      });
      // add vote logic here
    }
  }
}
