import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-user-description-element',
  templateUrl: './user-description-element.component.html',
  styleUrls: ['./user-description-element.component.scss']
})
export class UserDescriptionElementComponent {
  @Input() description!: string;
  @Input() @HostBinding('class.large') large: boolean = false;
}
