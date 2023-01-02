import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../interfaces/group';
import { Question } from '../interfaces/question';
import { Topic } from '../interfaces/topic';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: BehaviorSubject<Question[]> =new BehaviorSubject<Question[]>([
    {
      id: '0',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['politics'],
      votes: [
        {
          id: '0',
          userId: '6969',
          questionType: 'two-choice',
          voteOption:0
        },
        {
          id: '1',
          userId: '0',
          questionType: 'two-choice',
          voteOption: 2
        },
        {
          id: '2',
          userId: '1',
          questionType: 'two-choice',
          voteOption: 2
        },
        {
          id: '3',
          userId: '2',
          questionType: 'two-choice',
          voteOption: 1
        },
        {
          id: '4',
          userId: '3',
          questionType: 'two-choice',
          voteOption: 2
        }
      ],
      votedUsers: ['6969', '0', '1', '2', '3'],
      comments: []
    },
    {
      id: '1',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'multi-choice',
      topics: ['politics', 'canada'],
      votes: [
        {
          id: '5',
          userId: '6969',
          questionType: 'multi-choice',
          voteOption:0
        },
        {
          id: '6',
          userId: '0',
          questionType: 'multi-choice',
          voteOption: 1
        },
        {
          id: '7',
          userId: '1',
          questionType: 'multi-choice',
          voteOption: 2
        },
        {
          id: '8',
          userId: '2',
          questionType: 'multi-choice',
          voteOption: 3
        },
        {
          id: '9',
          userId: '3',
          questionType: 'multi-choice',
          voteOption: 4
      }],
      votedUsers: ['6969', '0', '1', '2', '3'],
      comments: []
    },
    {
      id: '2',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'multi-choice',
      topics: ['crime', 'international'],
      votes: [{id:"uB5UkJ6gq",userId:"jJmAwEO",questionType:"multi-choice",voteOption:2},
      {id:"b6irE737qxHB",userId:"lgtrmB3i",questionType:"multi-choice",voteOption:3},
      {id:"56WmJx",userId:"RlOpSfy",questionType:"multi-choice",voteOption:0},
      {id:"0hiY6DEJO",userId:"EvC9WH1cOr",questionType:"multi-choice",voteOption:4},
      {id:"0C7PC56Q",userId:"0nvIf2ZibC",questionType:"multi-choice",voteOption:2},
      {id:"EwZiNGT",userId:"Hcty20j0UfNz",questionType:"multi-choice",voteOption:4},
      {id:"s4p589kk",userId:"6PhbAdBu6zKd",questionType:"multi-choice",voteOption:4},
      {id:"mPeVWjKW",userId:"aBNSLX",questionType:"multi-choice",voteOption:1},
      {id:"QD6m8F0I",userId:"GZtv2VX9HX",questionType:"multi-choice",voteOption:3},
      {id:"BdTazs9mV",userId:"99foC3zXSX8",questionType:"multi-choice",voteOption:2},
      {id:"91WDqvEkl6H7",userId:"7N8guP5z",questionType:"multi-choice",voteOption:1},
      {id:"meCkkoCEfoJ",userId:"jxPtrs",questionType:"multi-choice",voteOption:3},
      {id:"8ER1Yyz",userId:"cazohVPAC",questionType:"multi-choice",voteOption:3},
      {id:"9sP6leIG",userId:"YZmkBF33r",questionType:"multi-choice",voteOption:0},
      {id:"UScnNPPddhh5",userId:"TkNujt",questionType:"multi-choice",voteOption:2},
      {id:"I2ZFYie",userId:"qcdXpd1lMD",questionType:"multi-choice",voteOption:2},
      {id:"iIBvvDVST",userId:"0O0w7j9",questionType:"multi-choice",voteOption:3},
      {id:"5osYy2",userId:"wja9GhK",questionType:"multi-choice",voteOption:1}],
      votedUsers: [],
      comments: []
    },
    {
      id: '3',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['canada'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionType:"two-choice",voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionType:"two-choice",voteOption:1},
      {id:"oUII0L",userId:"u0I7bNhQ",questionType:"two-choice",voteOption:2},
      {id:"Gv3BGJUoIR4",userId:"dpxjRsKTWsj0",questionType:"two-choice",voteOption:0},
      {id:"Z0wOac6yzSgI",userId:"h7SfSb4",questionType:"two-choice",voteOption:2},
      {id:"oXDzzBT",userId:"NkpzG2H",questionType:"two-choice",voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionType:"two-choice",voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionType:"two-choice",voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionType:"two-choice",voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionType:"two-choice",voteOption:2},
      {id:"6NsXZ0Zw",userId:"QGrv3oc8kK",questionType:"two-choice",voteOption:0},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionType:"two-choice",voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '4',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['drugs'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionType:"two-choice",voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionType:"two-choice",voteOption:1},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionType:"two-choice",voteOption:0},
      {id:"JVfTNn30q",userId:"Gapd9i",questionType:"two-choice",voteOption:1},
      {id:"QY2r9i5Fi",userId:"iTBrikqN15bF",questionType:"two-choice",voteOption:0},
      {id:"oUII0L",userId:"u0I7bNhQ",questionType:"two-choice",voteOption:2},
      {id:"Gv3BGJUoIR4",userId:"dpxjRsKTWsj0",questionType:"two-choice",voteOption:0},
      {id:"Z0wOac6yzSgI",userId:"h7SfSb4",questionType:"two-choice",voteOption:2},
      {id:"yGUT5AWSnf3",userId:"YzqExeA6P",questionType:"two-choice",voteOption:1},
      {id:"oMktgadqBhY",userId:"aA7XZyyg",questionType:"two-choice",voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionType:"two-choice",voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionType:"two-choice",voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionType:"two-choice",voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionType:"two-choice",voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionType:"two-choice",voteOption:2},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '5',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['politics', 'crime', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '6',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['canada', 'drugs'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionType:"two-choice",voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionType:"two-choice",voteOption:1},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionType:"two-choice",voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionType:"two-choice",voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionType:"two-choice",voteOption:2},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '7',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['drugs', 'crime', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"yGUT5AWSnf3",userId:"YzqExeA6P",questionType:"two-choice",voteOption:1},
      {id:"oMktgadqBhY",userId:"aA7XZyyg",questionType:"two-choice",voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionType:"two-choice",voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionType:"two-choice",voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionType:"two-choice",voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionType:"two-choice",voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionType:"two-choice",voteOption:2},
      {id:"6NsXZ0Zw",userId:"QGrv3oc8kK",questionType:"two-choice",voteOption:0},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionType:"two-choice",voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '8',
      text: 'Hey this is a test. The question is long on purpose.',
      type: 'two-choice',
      topics: ['drugs', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionType:"two-choice",voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionType:"two-choice",voteOption:0},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionType:"two-choice",voteOption:0},
      {id:"JVfTNn30q",userId:"Gapd9i",questionType:"two-choice",voteOption:1},
      {id:"QY2r9i5Fi",userId:"iTBrikqN15bF",questionType:"two-choice",voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionType:"two-choice",voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionType:"two-choice",voteOption:2},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionType:"two-choice",voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionType:"two-choice",voteOption:2}],
      votedUsers: [],
      comments: []
    }
  ]);

  loggedInAs: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: '6969'
  });

  groups: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([
    {
      id: '0',
      name: 'Basic Questions',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: ['6969'],
      questionIds: ['0', '1', '2', '3'],
      inviteOnly: false
    },
    {
      id: '1',
      name: 'More Questions',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: ['6969'],
      questionIds: ['4', '5', '6'],
      inviteOnly: false
    },
    {
      id: '2',
      name: 'Something Something Group',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['0', '2'],
      inviteOnly: false
    },
    {
      id: '3',
      name: 'Some Other Group',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: ['6969'],
      questionIds: ['6', '3'],
      inviteOnly: true
    },
    {
      id: '4',
      name: 'Again, Another Group',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['5', '6', '7'],
      inviteOnly: false
    },
    {
      id: '5',
      name: 'Some Other Group Again',
      description: 'description',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    }
  ]);

  topics: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>([

  ]);
  constructor() { }
}
