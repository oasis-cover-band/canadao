import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-actions-element',
  templateUrl: './group-actions-element.component.html',
  styleUrls: ['./group-actions-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupActionsElementComponent {
  @Input() alreadyMember!: boolean;

  @Output() groupAction: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleGroupMembership(): void {
    if (this.alreadyMember) {
      this.groupAction.emit(false);
    } else {
      this.groupAction.emit(true);
    }
  }
}
