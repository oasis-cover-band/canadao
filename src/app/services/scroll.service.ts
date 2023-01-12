import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  mainElement: BehaviorSubject<ElementRef | undefined> = new BehaviorSubject<ElementRef | undefined>(undefined);
  constructor() { }
  
  refresh() {
    ScrollTrigger.refresh();
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 10);
  }
}
