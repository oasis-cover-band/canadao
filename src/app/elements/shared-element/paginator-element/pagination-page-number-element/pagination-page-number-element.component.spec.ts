import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPageNumberElementComponent } from './pagination-page-number-element.component';

describe('PaginationPageNumberElementComponent', () => {
  let component: PaginationPageNumberElementComponent;
  let fixture: ComponentFixture<PaginationPageNumberElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPageNumberElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationPageNumberElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
