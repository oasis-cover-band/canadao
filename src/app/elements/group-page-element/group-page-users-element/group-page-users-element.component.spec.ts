import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageUsersElementComponent } from './group-page-users-element.component';

describe('GroupPageUsersElementComponent', () => {
  let component: GroupPageUsersElementComponent;
  let fixture: ComponentFixture<GroupPageUsersElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageUsersElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPageUsersElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
