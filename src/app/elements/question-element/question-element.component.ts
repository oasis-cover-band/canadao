import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import ScrollTrigger from "gsap/ScrollTrigger";

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

  ngOnInit(): void {
    if (this.question.votedUsers.indexOf(this.loggedInAs.id) === -1) {
      this.alreadyVoted = false;
    } else {
      this.alreadyVoted = true;
    }
  }

  vote(optionIndex: number): void {
    if (this.alreadyVoted === false) {
      ScrollTrigger.refresh();
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
      ScrollTrigger.refresh();
      // add vote logic here
    }
  }
}
