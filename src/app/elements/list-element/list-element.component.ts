import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItem } from 'src/app/interfaces/list-item';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListElementComponent {

  @Input() listItems!: ListItem[];

  listItemTrackBy(index: number, item: ListItem) {
    return index;
  }
}
