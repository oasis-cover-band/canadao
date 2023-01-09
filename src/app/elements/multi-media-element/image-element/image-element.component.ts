import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageElementComponent {
  @Input() src!: string;
  @ViewChild('imageElement') imageElement!: ElementRef;
  @HostBinding('class.loading') loading: boolean = true;

  loaded(event: any) {
    if (this.imageElement.nativeElement.complete === true) {
      this.loading = false;
    }
  }
}
