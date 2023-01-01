import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTopicListElementComponent } from './question-topic-list-element.component';

describe('QuestionTopicListElementComponent', () => {
  let component: QuestionTopicListElementComponent;
  let fixture: ComponentFixture<QuestionTopicListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTopicListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTopicListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
