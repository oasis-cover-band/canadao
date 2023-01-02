import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStatisticsElementComponent } from './group-statistics-element.component';

describe('GroupStatisticsElementComponent', () => {
  let component: GroupStatisticsElementComponent;
  let fixture: ComponentFixture<GroupStatisticsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupStatisticsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupStatisticsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
