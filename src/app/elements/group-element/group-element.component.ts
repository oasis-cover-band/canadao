import { Component, Input } from '@angular/core';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.scss']
})
export class GroupElementComponent {
  @Input() group!: Group;
}
