import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { Vote } from 'src/app/interfaces/vote';
// import LinearGradient from 'zrender/lib/graphic/LinearGradient';

@Component({
  selector: 'app-question-two-choice-results-element',
  templateUrl: './question-two-choice-results-element.component.html',
  styleUrls: ['./question-two-choice-results-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTwoChoiceResultsElementComponent implements OnInit{

  style = getComputedStyle(document.body);
  blue = this.style.getPropertyValue('--blue');
  yellow = this.style.getPropertyValue('--yellow');
  red = this.style.getPropertyValue('--red');
  white = this.style.getPropertyValue('--white');
  
  @Input() question!: Question;

  options: any;

  ngOnInit(): void {
    console.log(this.question);
    let yesVotes: number = 0,
    abstainVotes: number = 0,
    noVotes: number = 0,
    allVotes: number = 0;

    for(let index = 0; index < this.question.votes.length; index++) {
      if (this.question.votes[index].voteOption === 0) {
        noVotes++;
      } else if (this.question.votes[index].voteOption === 1) {
        yesVotes++;
      } else if (this.question.votes[index].voteOption === 2) {
        abstainVotes++;
      }
      allVotes++;
    }

    this.options = {
      color: [this.blue, this.yellow, this.red],
      tooltip: {
        trigger: 'item'
      },
      textStyle: {
        color: this.white,
        textBorderColor: this.white,
        textShadowColor: 'transparent',
        textBorderWidth: 0,
        fontSize: 12
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          label: {
            color: this.white,
          },
          data: [
            { value: yesVotes, name: 'Yes' },
            { value: abstainVotes, name: 'Abstain' },
            { value: noVotes, name: 'No' }
          ],
          emphasis: {
            label: {
              color: this.white,
              fontSize: 25
            }
          }
        }
      ]
    };
  }
}
