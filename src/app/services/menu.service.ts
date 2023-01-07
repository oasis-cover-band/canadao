import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  @Input() opened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleMenu(): void {
    this.opened.next(!this.opened.getValue());
  }

  closeMenu(): void {
    this.opened.next(false);
  }
}
