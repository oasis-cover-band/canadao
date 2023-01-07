import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsPageComponent {
  topics: BehaviorSubject<Topic[]> = this.dataService.topics;
  constructor(
    private dataService: DataService
  ) {}

  topicTrackBy(index: number, topic: Topic): string {
    return topic.id;
  }
}
