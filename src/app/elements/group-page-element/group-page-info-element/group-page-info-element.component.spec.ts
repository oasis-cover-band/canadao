import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageInfoElementComponent } from './group-page-info-element.component';

describe('GroupPageInfoElementComponent', () => {
  let component: GroupPageInfoElementComponent;
  let fixture: ComponentFixture<GroupPageInfoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageInfoElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPageInfoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
