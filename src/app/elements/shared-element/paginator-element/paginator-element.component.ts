import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-paginator-element',
  templateUrl: './paginator-element.component.html',
  styleUrls: ['./paginator-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorElementComponent {
  @Input() page!: number;
  @Input() @HostBinding('class.active') active!: boolean;

  @ViewChildren('paginatedElement', {read: ElementRef}) public set paginatedElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
      if (index % this.maxPerPage === 0) {
        this.paginationPages.push(this.paginationPages.length + 1);
      }
    }
  }

  public get paginatedElements(): QueryList<ElementRef> {
    return this._paginatedElements;
  }

  private _paginatedElements!: QueryList<ElementRef>;

  viewAll: boolean = false;
  paginationPages: number[] = [];
  currentPage = 1;
  maxPerPage = 4;
  toggleText = 'View All';

  constructor(
    private scrollService: ScrollService,
    private renderer: Renderer2
  ) {

  }
  

  toggle(): void {
    this.viewAll = !this.viewAll;
    if (this.viewAll) {
      this.toggleText = 'Hide';
    } else {
      this.toggleText = 'View All';
    }
    this.scrollService.refresh();
  }

  nextPage(): void {
    if (this.currentPage * this.maxPerPage < this.paginatedElements.length) {
      this.currentPage++;
    }
    this.scrollService.refresh();
  }

  previousPage(): void {
    if ((this.currentPage - 1) * this.maxPerPage > 0) {
      this.currentPage--;
    }
    this.scrollService.refresh();
  }

  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.scrollService.refresh();
  }

  paginatorTrackBy(index: number, paginator: number): number {
    return paginator;
  }

  registerScrollTrigger(element: Element): void {
    ScrollTrigger.create({
      trigger: element,
      scroller: this.scrollService.mainElement.getValue()!.nativeElement,
      scrub: 0.5,
      onEnter: () => { this.animateFrom(element); }, 
      onEnterBack: () => { this.animateFrom(element); },
      onLeave: () => { this.hide(element); },
      onLeaveBack: () => { this.hide(element); }
    });
  }

  hide(element: Element): void {
    gsap.to(element, {
      duration: 0.25, 
      autoAlpha: 0, 
      ease: "circ", 
      overwrite: "auto"
    });
  }

  animateFrom(element: Element): void {
    gsap.fromTo(element, {autoAlpha: 0}, {
      duration: 0.25,
      autoAlpha: 1, 
      ease: "circ", 
      overwrite: "auto"
    });
  }
}
