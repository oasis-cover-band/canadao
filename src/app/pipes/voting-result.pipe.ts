import { Pipe, PipeTransform } from '@angular/core';
import { Vote } from '../interfaces/vote';

@Pipe({
  name: 'votingResult',
  pure: true
})
export class VotingResultPipe implements PipeTransform {

  transform(value: number, args: Vote['questionType']): string {
    if (args === 'two-choice') {
      return this.twoChoice(value);
    } else if (args === 'multi-choice') {
      return this.multiChoice(value);
    } else {
      // custom choice
    }
    return '';
  }

  twoChoice(value: number): string {
    if (value === 0) {
      return 'No';
    } else if (value === 1) {
      return 'Yes';
    } else {
      return 'Abstain';
    }
  }

  multiChoice(value: number): string {
    if (value === 0) {
      return 'Strongly Disagree';
    } else if (value === 1) {
      return 'Disagree';
    } else if (value === 2) {
      return 'Neutral';
    } else if (value === 3) {
      return 'Agree';
    } else if (value === 4) {
      return 'Strongly Agree';
    } else {
      return 'Abstain';
    }
  }

}
