import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question-multi-choice-results-element',
  templateUrl: './question-multi-choice-results-element.component.html',
  styleUrls: ['./question-multi-choice-results-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMultiChoiceResultsElementComponent implements OnInit{

  style = getComputedStyle(document.body);
  blue = this.style.getPropertyValue('--blue');
  lightBlue = this.style.getPropertyValue('--light-blue');
  yellow = this.style.getPropertyValue('--yellow');
  red = this.style.getPropertyValue('--red');
  lightRed = this.style.getPropertyValue('--light-red');
  white = this.style.getPropertyValue('--white');

  @Input() question!: Question;

  options: any;

  ngOnInit(): void {
    let vNayVotes: number = 0,
    nayVotes: number = 0,
    neutralVotes: number = 0,
    yayVotes: number = 0,
    vYayVotes: number = 0,
    abstainVotes: number = 0;

    for(let index = 0; index < this.question.votes.length; index++) {
      if (this.question.votes[index].voteOption === 0) {
        vNayVotes++;
      } else if (this.question.votes[index].voteOption === 1) {
        nayVotes++;
      } else if (this.question.votes[index].voteOption === 2) {
        neutralVotes++;
      } else if (this.question.votes[index].voteOption === 3) {
        yayVotes++;
      } else if (this.question.votes[index].voteOption === 4) {
        vYayVotes++;
      } else if (this.question.votes[index].voteOption === 5) {
        abstainVotes++;
      }
    }
    
    this.options = {
      color: [this.blue, this.lightBlue, this.yellow, this.lightRed, this.red],
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
            { value: vYayVotes, name: 'Strongly Agree' },
            { value: yayVotes, name: 'Agree' },
            { value: neutralVotes, name: 'Neutral' },
            { value: nayVotes, name: 'Disagree' },
            { value: vNayVotes, name: 'Strongly Disagree' }
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
