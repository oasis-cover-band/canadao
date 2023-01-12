import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-group-page-element',
  templateUrl: './group-page-element.component.html',
  styleUrls: ['./group-page-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageElementComponent implements OnInit {
  @Input() group!: Group;
  @Input() loggedInAs!: User;
  @Input() users!: User[];
  @Input() questions!: Question[];

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.getUsers();
    this.getQuestions();
  }

  getUsers(): void {
    this.users = this.dataService.getUsers(this.group.userIds);
  }

  getQuestions(): void {
    this.questions = this.dataService.getQuestions(this.group.questionIds);
  }
}
