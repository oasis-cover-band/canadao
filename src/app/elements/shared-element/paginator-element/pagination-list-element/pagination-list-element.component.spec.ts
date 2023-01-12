import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationListElementComponent } from './pagination-list-element.component';

describe('PaginationListElementComponent', () => {
  let component: PaginationListElementComponent;
  let fixture: ComponentFixture<PaginationListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
