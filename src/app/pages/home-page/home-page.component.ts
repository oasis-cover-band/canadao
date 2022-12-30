import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

  questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'multi-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    },
    {
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      comments: []
    }
  ]);

  questionTrackBy(index: number, question: Question): string {
    return question.text;
  }
}
