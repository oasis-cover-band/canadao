import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-category-list-element',
  templateUrl: './question-category-list-element.component.html',
  styleUrls: ['./question-category-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCategoryListElementComponent {
  @Input() categories!: string[];

  categoryTrackBy(index: number, category: string): string {
    return category;
  }
}
