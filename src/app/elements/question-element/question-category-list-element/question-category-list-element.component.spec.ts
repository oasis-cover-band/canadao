import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryListElementComponent } from './question-category-list-element.component';

describe('QuestionCategoryListElementComponent', () => {
  let component: QuestionCategoryListElementComponent;
  let fixture: ComponentFixture<QuestionCategoryListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCategoryListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCategoryListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
