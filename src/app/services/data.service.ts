import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../interfaces/group';
import { Question } from '../interfaces/question';
import { Topic } from '../interfaces/topic';
import { User } from '../interfaces/user';
import { Vote } from '../interfaces/vote';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: BehaviorSubject<Question[]> =new BehaviorSubject<Question[]>([
    {
      id: '0',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[1, 1, 3],
      type: 'two-choice',
      topics: ['politics'],
      votes: [
        {
          id: '0',
          userId: '6969',
          questionId: '0',
          questionType: 'two-choice',
          timestamp: 0,
          voteOption:0
        },
        {
          id: '1',
          userId: '0',
          questionId: '0',
          questionType: 'two-choice',
          timestamp: 0,
          voteOption: 2
        },
        {
          id: '2',
          userId: '1',
          questionId: '0',
          questionType: 'two-choice',
          timestamp: 0,
          voteOption: 2
        },
        {
          id: '3',
          userId: '2',
          questionId: '0',
          questionType: 'two-choice',
          timestamp: 0,
          voteOption: 1
        },
        {
          id: '4',
          userId: '3',
          questionId: '0',
          questionType: 'two-choice',
          timestamp: 0,
          voteOption: 2
        }
      ],
      votedUsers: ['6969', '0', '1', '2', '3'],
      comments: []
    },
    {
      id: '1',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'],
      optionsCount:[1, 1, 1, 1, 1],
      type: 'multi-choice',
      topics: ['politics', 'canada'],
      votes: [
        {
          id: '5',
          userId: '6969',
          questionId: '1',
          questionType: 'multi-choice',
          timestamp: 0,
          voteOption:0
        },
        {
          id: '6',
          userId: '0',
          questionId: '1',
          questionType: 'multi-choice',
          timestamp: 0,
          voteOption: 1
        },
        {
          id: '7',
          userId: '1',
          questionId: '1',
          questionType: 'multi-choice',
          timestamp: 0,
          voteOption: 2
        },
        {
          id: '8',
          userId: '2',
          questionId: '1',
          questionType: 'multi-choice',
          timestamp: 0,
          voteOption: 3
        },
        {
          id: '9',
          userId: '3',
          questionId: '1',
          questionType: 'multi-choice',
          timestamp: 0,
          voteOption: 4
      }],
      votedUsers: ['6969', '0', '1', '2', '3'],
      comments: []
    },
    {
      id: '2',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'],
      optionsCount:[2, 3, 5, 5, 3],
      type: 'multi-choice',
      topics: ['crime', 'international'],
      votes: [{id:"uB5UkJ6gq",userId:"jJmAwEO",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:2},
      {id:"b6irE737qxHB",userId:"lgtrmB3i",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:3},
      {id:"56WmJx",userId:"RlOpSfy",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:0},
      {id:"0hiY6DEJO",userId:"EvC9WH1cOr",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:4},
      {id:"0C7PC56Q",userId:"0nvIf2ZibC",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:2},
      {id:"EwZiNGT",userId:"Hcty20j0UfNz",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:4},
      {id:"s4p589kk",userId:"6PhbAdBu6zKd",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:4},
      {id:"mPeVWjKW",userId:"aBNSLX",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:1},
      {id:"QD6m8F0I",userId:"GZtv2VX9HX",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:3},
      {id:"BdTazs9mV",userId:"99foC3zXSX8",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:2},
      {id:"91WDqvEkl6H7",userId:"7N8guP5z",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:1},
      {id:"meCkkoCEfoJ",userId:"jxPtrs",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:3},
      {id:"8ER1Yyz",userId:"cazohVPAC",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:3},
      {id:"9sP6leIG",userId:"YZmkBF33r",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:0},
      {id:"UScnNPPddhh5",userId:"TkNujt",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:2},
      {id:"I2ZFYie",userId:"qcdXpd1lMD",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:2},
      {id:"iIBvvDVST",userId:"0O0w7j9",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:3},
      {id:"5osYy2",userId:"wja9GhK",questionId: '2', questionType:"multi-choice",timestamp: 0,voteOption:1}],
      votedUsers: [],
      comments: []
    },
    {
      id: '3',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[6, 3, 5],
      type: 'two-choice',
      topics: ['canada'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"oUII0L",userId:"u0I7bNhQ",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"Gv3BGJUoIR4",userId:"dpxjRsKTWsj0",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"Z0wOac6yzSgI",userId:"h7SfSb4",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"oXDzzBT",userId:"NkpzG2H",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"6NsXZ0Zw",userId:"QGrv3oc8kK",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId: '3',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '4',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[7, 4, 6],
      type: 'two-choice',
      topics: ['drugs'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"JVfTNn30q",userId:"Gapd9i",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"QY2r9i5Fi",userId:"iTBrikqN15bF",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"oUII0L",userId:"u0I7bNhQ",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"Gv3BGJUoIR4",userId:"dpxjRsKTWsj0",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"Z0wOac6yzSgI",userId:"h7SfSb4",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"yGUT5AWSnf3",userId:"YzqExeA6P",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"oMktgadqBhY",userId:"aA7XZyyg",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId: '4',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '5',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[1, 1, 1],
      type: 'two-choice',
      topics: ['politics', 'crime', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId:'5',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId:'5',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId:'5',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '6',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[3, 2, 3],
      type: 'two-choice',
      topics: ['canada', 'drugs'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"YB8ebBbCluu",userId:"vDjElK08ZnO",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"TWl1Mvh",userId:"7w6aYu",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId:'6',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '7',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[6, 3, 3],
      type: 'two-choice',
      topics: ['drugs', 'crime', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"yGUT5AWSnf3",userId:"YzqExeA6P",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"oMktgadqBhY",userId:"aA7XZyyg",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"oXDzzBT",userId:"NkpzG2H",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"yZWNjj",userId:"JrxFgu",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"Z4GskS2Ovv",userId:"K7qDGPq7GWi",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"6NsXZ0Zw",userId:"QGrv3oc8kK",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId:'7',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    },
    {
      id: '8',
      text: 'Hey this is a test. The question is long on purpose.',
      timestamp: 0,
      options:['no', 'yes', 'abstain'],
      optionsCount:[4, 3, 2],
      type: 'two-choice',
      topics: ['drugs', 'international'],
      votes: [{id:"s2kBcKPR2gHb",userId:"vES6emZ",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"NciiU51Opl",userId:"BXOX9Xb",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"DIOovv0ELF",userId:"OKLutAE7U",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"JVfTNn30q",userId:"Gapd9i",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"QY2r9i5Fi",userId:"iTBrikqN15bF",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"4tMIvFG",userId:"IcQRHp",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:0},
      {id:"V0km1U",userId:"WoK8RdI",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:2},
      {id:"kguAXlezXGZ",userId:"MUVhkZuv",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:1},
      {id:"QFwAjt",userId:"tZ0tAm3H",questionId:'8',questionType:"two-choice",timestamp: 0,voteOption:2}],
      votedUsers: [],
      comments: []
    }
  ]);

  loggedInAs: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: '6969',
    name: 'Mdear',
    description: 'A very kind man looking to bring accountability to democracies.',
    image: 'https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    delegatedFromIds: [],
    delegatedToId: '',
    groupIds: [],
    voteIds: ['0', '1'],
    voteCount: 19292,
    votePower: 9001
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
      name: 'Free Masons',
      description: 'We keep our idiot members in the dark, while plying them to do our bidding.',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: ['6969'],
      questionIds: ['4', '5', '6'],
      inviteOnly: false
    },
    {
      id: '2',
      name: 'World Economic Forum',
      description: `We're the public facing arm of your country's owners.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['0', '2'],
      inviteOnly: false
    },
    {
      id: '3',
      name: 'Council on Foreign Relations',
      description: 'We shape the media you consume, and world events.',
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: ['6969'],
      questionIds: ['6', '3'],
      inviteOnly: true
    },
    {
      id: '4',
      name: 'Rhodes Scholarship',
      description: `We give credibility to the various minions of the NWO.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['5', '6', '7'],
      inviteOnly: false
    },
    {
      id: '5',
      name: 'Carnegie Institute',
      description: `We control what people learn in schools and universities - globally.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '6',
      name: 'Rockefeller Foundation',
      description: `We control what doctors know, and what hospitals do.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '7',
      name: 'Bill & Melinda Gates Foundation',
      description: `Originally called the Bill & Melinda Gates Foundation for Population Control - we aim to control all narratives concerning medicine.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '8',
      name: 'Knights of Malta',
      description: `We're the millitary arm of the NWO. Blackmail, violence, gangstalking - whatever is necessary.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '9',
      name: 'CIA',
      description: `We sell drugs, traffick children and craft narratives.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '10',
      name: 'FBI',
      description: `We ensure there's always a boot on every American neck..`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '11',
      name: 'Tavistock',
      description: `We're like the Carnegie Foundation - except more insidious.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '12',
      name: 'Trilateral Commision',
      description: `Yawn. We're the cream of the crop.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '13',
      name: 'Bohemian Grove',
      description: `We host a yearly get-together with every country's sell outs and traitors.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '14',
      name: 'Jesuits',
      description: `We are the Vatican's masters.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '15',
      name: 'Anti Defamation League',
      description: `We ensure conversations remain within our approved scope.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '16',
      name: 'Zionism',
      description: `We promise we only want to have our own country. We're not trying to control anyone!`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '17',
      name: 'John Hopkins',
      description: `We ensure our colleagues always have Approved Science™ available. We also run simulations that just so happen to come true.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    },
    {
      id: '18',
      name: 'IMF',
      description: `We ensure countries are no longer sovereign through means of blackmail, murder and usury.`,
      image: 'https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      userIds: [],
      questionIds: ['4'],
      inviteOnly: true
    }
  ]);

  topics: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>([
    {
      id: '0',
      name: 'Politics',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      questionIds: ['0', '1', '5']
    },
    {
      id: '1',
      name: 'Canada',
      image: 'https://images.pexels.com/photos/11377012/pexels-photo-11377012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      questionIds: ['1', '6', '3']
    },
    {
      id: '2',
      name: 'Drugs',
      image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      questionIds: ['8', '7', '6', '4']
    },
    {
      id: '3',
      name: 'International',
      image: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      questionIds: ['8', '7', '5', '2']
    },
    {
      id: '4',
      name: 'Crimes',
      image: 'https://images.pexels.com/photos/270220/pexels-photo-270220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      questionIds: ['7', '5', '2']
    }
  ]);

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([{
      id: '6969',
      name: 'Mdear',
      description: 'A very kind man looking to bring accountability to democracies.',
      image: '../../assets/temporary/canada0.jpg',
      delegatedFromIds: ['001', '002'],
      delegatedToId: '',
      groupIds: ['1', '3'],
      voteIds: ['0', '1'],
      voteCount: 19292,
      votePower: 9001
    },
    {
      id: '001',
      name: 'Judi',
      description: 'A nice lady looking to bring accountability to democracies.',
      image: '../../assets/temporary/canada1.jpg',
      delegatedFromIds: ['003', '005'],
      delegatedToId: '6969',
      groupIds: [],
      voteIds: [],
      voteCount: 2929,
      votePower: 9401
    },
    {
      id: '002',
      name: 'Ryan',
      description: 'A man with far too many tabs opened.',
      image: '../../assets/temporary/ryan.jpg',
      delegatedFromIds: [],
      delegatedToId: '6969',
      groupIds: [],
      voteIds: [],
      voteCount: 420,
      votePower: 69
    },
    {
      id: '003',
      name: 'Cdog',
      description: `Woof woof. It's Cdoggggg maaaan`,
      image: '../../assets/temporary/cdog.jpg',
      delegatedFromIds: [],
      delegatedToId: '001',
      groupIds: [],
      voteIds: [],
      voteCount: 13,
      votePower: 37
    },
    {
      id: '004',
      name: 'Oasis',
      description: 'Reincarnation of Gil Scott-Heron.',
      image: '../../assets/temporary/gil.jpg',
      delegatedFromIds: [],
      delegatedToId: '005',
      groupIds: [],
      voteIds: [],
      voteCount: 1,
      votePower: 0
    },
    {
      id: '005',
      name: 'Blain',
      description: `It's Blain in your membrane.`,
      image: 'https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      delegatedFromIds: ['009', '004'],
      delegatedToId: '001',
      groupIds: [],
      voteIds: [],
      voteCount: 1,
      votePower: 0
    },
    {
      id: '006',
      name: 'RCMP',
      description: `We're like the Gestapo - but with far better PR, less accountability & way more drugs!`,
      image: '../../assets/temporary/rcmp.jpg',
      delegatedFromIds: [],
      delegatedToId: '007',
      groupIds: [],
      voteIds: [],
      voteCount: 1,
      votePower: 0
    },
    {
      id: '007',
      name: 'Justin Trudeau',
      description: `Hey it's really me. I'm a communist fuck-face and I can't wait to enslave you all!`,
      image: '../../assets/temporary/trudeau.jpg',
      delegatedFromIds: ['006'],
      delegatedToId: '008',
      groupIds: [],
      voteIds: [],
      voteCount: 0,
      votePower: 0
    },
    {
      id: '008',
      name: 'Chrystia Freeland',
      description: `I'm Chrystia, I have a long family history of Nazism! RIP Grandpapa Chomiak.`,
      image: '../../assets/temporary/chrystia.jpg',
      delegatedFromIds: ['007'],
      delegatedToId: '009',
      groupIds: [],
      voteIds: [],
      voteCount: 0,
      votePower: 0
    },
    {
      id: '009',
      name: 'Klaus Schwab',
      description: `You will eat bugs, you will own nothing. Ready for the climate lockdowns? They're for the public good.`,
      image: '../../assets/temporary/schwab.jpg',
      delegatedFromIds: ['008', '010'],
      delegatedToId: '005',
      groupIds: [],
      voteIds: [],
      voteCount: 0,
      votePower: 0
    },
    {
      id: '010',
      name: 'Elon Musk',
      description: `I'm creating the infrastrcuture for an unescapable Matrix - while preaching against it.`,
      image: '../../assets/temporary/elon.jpg',
      delegatedFromIds: [],
      delegatedToId: '009',
      groupIds: [],
      voteIds: [],
      voteCount: 0,
      votePower: 0
    }
  ]);

  currentQuestions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  constructor() { }


  getGroup(groupId: string): Group {
    return this.groups.getValue().filter(group => {return group.id === groupId})[0];
  }

  getUser(userId: string): User {
    return this.users.getValue().filter(user => {return user.id === userId})[0];
  }

  getVotes(userId: string): [Vote[], string[]] {
    let votes: Vote[] = [];
    let questionName: string[] = [];
    let questions: Question[] = this.questions.getValue();
    
    for (let index = 0; index < questions.length; index++) {
      let vote = questions[index].votes.filter((vote: Vote) => {
        return vote.userId === userId;
      })[0];
      if (vote !== undefined) {
        votes.push(vote);
        questionName.push(questions[index].text);
      }
    }
    return [votes, questionName];
  }

  getGroups(groupIds: string[]): Group[] {
    let groupStorage = this.groups.getValue();
    
    return groupStorage.filter((group: Group) => {
      return groupIds.indexOf(group.id) !== -1;
    });

  }

  getUsers(userIds: string[]): User[] {
    let userStorage = this.users.getValue();
    
    return userStorage.filter((user: User) => {
      return userIds.indexOf(user.id) !== -1;
    });

  }

  getQuestions(questionIds: string[]): Question[] {
    let questionStorage = this.questions.getValue();
    
    return questionStorage.filter((question: Question) => {
      return questionIds.indexOf(question.id) !== -1;
    });

  }
}
