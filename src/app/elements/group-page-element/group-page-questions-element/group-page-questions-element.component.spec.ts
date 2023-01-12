import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageQuestionsElementComponent } from './group-page-questions-element.component';

describe('GroupPageQuestionsElementComponent', () => {
  let component: GroupPageQuestionsElementComponent;
  let fixture: ComponentFixture<GroupPageQuestionsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageQuestionsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPageQuestionsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
