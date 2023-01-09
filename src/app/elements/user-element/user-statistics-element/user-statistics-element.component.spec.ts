import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatisticsElementComponent } from './user-statistics-element.component';

describe('UserStatisticsElementComponent', () => {
  let component: UserStatisticsElementComponent;
  let fixture: ComponentFixture<UserStatisticsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatisticsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatisticsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
