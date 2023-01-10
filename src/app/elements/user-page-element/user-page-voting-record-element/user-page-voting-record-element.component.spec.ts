import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageVotingRecordElementComponent } from './user-page-voting-record-element.component';

describe('UserPageVotingRecordElementComponent', () => {
  let component: UserPageVotingRecordElementComponent;
  let fixture: ComponentFixture<UserPageVotingRecordElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageVotingRecordElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageVotingRecordElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
