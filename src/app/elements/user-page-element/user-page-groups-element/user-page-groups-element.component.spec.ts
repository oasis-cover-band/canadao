import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageGroupsElementComponent } from './user-page-groups-element.component';

describe('UserPageGroupsElementComponent', () => {
  let component: UserPageGroupsElementComponent;
  let fixture: ComponentFixture<UserPageGroupsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageGroupsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageGroupsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
