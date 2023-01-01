import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementStatisticsComponent } from './group-element-statistics.component';

describe('GroupElementStatisticsComponent', () => {
  let component: GroupElementStatisticsComponent;
  let fixture: ComponentFixture<GroupElementStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
