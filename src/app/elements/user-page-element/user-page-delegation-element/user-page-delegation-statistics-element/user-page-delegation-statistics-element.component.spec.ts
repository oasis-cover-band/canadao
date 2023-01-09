import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDelegationStatisticsElementComponent } from './user-page-delegation-statistics-element.component';

describe('UserPageDelegationStatisticsElementComponent', () => {
  let component: UserPageDelegationStatisticsElementComponent;
  let fixture: ComponentFixture<UserPageDelegationStatisticsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageDelegationStatisticsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageDelegationStatisticsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
