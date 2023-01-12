import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorElementComponent } from './paginator-element.component';

describe('PaginatorElementComponent', () => {
  let component: PaginatorElementComponent;
  let fixture: ComponentFixture<PaginatorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
