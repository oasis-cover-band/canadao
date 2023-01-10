import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  mainElement: BehaviorSubject<ElementRef | undefined> = new BehaviorSubject<ElementRef | undefined>(undefined);
  constructor() { }
}
