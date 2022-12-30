import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-question-menu-element',
  templateUrl: './question-menu-element.component.html',
  styleUrls: ['./question-menu-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMenuElementComponent {
  menuItems: MenuItem[] = [
    {
      link: '',
      text: 'Discussion',
      icon: 'message',
      hover: 'blue'
    },
    {
      link: '',
      text: 'Share',
      icon: 'share-variant',
      hover: 'green'
    },
    {
      link: '',
      text: 'Report',
      icon: 'alert',
      hover: 'red'
    }
  ];

  menuItemTrackBy(index: number, item: MenuItem): string {
    return item.text;
  }
}
