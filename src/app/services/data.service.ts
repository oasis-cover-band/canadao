import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../interfaces/question';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: BehaviorSubject<Question[]> =new BehaviorSubject<Question[]>([
    {
      id: 0,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [6969],
      comments: []
    },
    {
      id: 1,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'multi-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 2,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 3,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 4,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 5,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 6,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 7,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    },
    {
      id: 8,
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      categories: ['politics', 'crime', 'international'],
      votes: [],
      votedUsers: [],
      comments: []
    }
  ]);

  loggedInAs: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: 6969
  });
  constructor() { }
}
