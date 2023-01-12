import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2 } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-pagination-list-element',
  templateUrl: './pagination-list-element.component.html',
  styleUrls: ['./pagination-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationListElementComponent {

  @Input()
  public set paginatedElements(value: QueryList<ElementRef>) {
    this._paginatedElements = value;
    for (let index = 0; index < value.length; index++) {
      if (index < this.maxPerPage) {
        console.log('show');
        this.renderer.setStyle(value.get(index)?.nativeElement, 'display', 'grid');
      } else {
        console.log('hide');
        this.renderer.setStyle(value.get(index)?.nativeElement, 'display', 'none');
      }
    }
    this.scrollService.refresh();
  }

  public get paginatedElements(): QueryList<ElementRef> {
    return this._paginatedElements;
  }

  private _paginatedElements!: QueryList<ElementRef>;

  @Input()
  public set currentPage(value: number) {
    if (this.paginatedElements === undefined) {
      console.log('no paginatedelements');
      return;
    }
    for (let index = 0; index < this.paginatedElements.length; index++) {
      if (this.viewAll) {
        if (index < value * this.maxPerPage && index >= (value - 1) * this.maxPerPage) {
          this.renderer.setStyle(this.paginatedElements.get(index)?.nativeElement, 'display', 'grid');
        } else {
          this.renderer.setStyle(this.paginatedElements.get(index)?.nativeElement, 'display', 'none');
        }
      } else {
        console.log('currentPage && none')
        if (index < this.maxPerPage) {
          this.renderer.setStyle(this.paginatedElements.get(index)?.nativeElement, 'display', 'grid');
        } else {
          this.renderer.setStyle(this.paginatedElements.get(index)?.nativeElement, 'display', 'none');
        }
      }
    }
    this.scrollService.refresh();
  }
  @Input() viewAll!: boolean;
  @Input() maxPerPage!: number;

  @Input() @HostBinding('class.thumbnail') thumbnail: boolean = false;
  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {

  }
  // this.viewAll && index < this.currentPage * this.maxPerPage && index >= (this.currentPage - 1) * this.maxPerPage)
  // || !this.viewAll && index < 3"
}
