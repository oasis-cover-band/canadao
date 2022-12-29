import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryItemElementComponent } from './question-category-item-element.component';

describe('QuestionCategoryItemElementComponent', () => {
  let component: QuestionCategoryItemElementComponent;
  let fixture: ComponentFixture<QuestionCategoryItemElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCategoryItemElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCategoryItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
