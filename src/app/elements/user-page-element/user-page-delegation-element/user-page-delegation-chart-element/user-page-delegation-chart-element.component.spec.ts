import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDelegationChartElementComponent } from './user-page-delegation-chart-element.component';

describe('UserPageDelegationChartElementComponent', () => {
  let component: UserPageDelegationChartElementComponent;
  let fixture: ComponentFixture<UserPageDelegationChartElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageDelegationChartElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageDelegationChartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
