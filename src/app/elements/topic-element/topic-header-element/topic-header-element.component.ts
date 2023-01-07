import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-header-element',
  templateUrl: './topic-header-element.component.html',
  styleUrls: ['./topic-header-element.component.scss']
})
export class TopicHeaderElementComponent {
  @Input() name!: string;
}
