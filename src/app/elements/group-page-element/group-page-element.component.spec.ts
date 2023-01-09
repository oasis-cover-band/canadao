import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPageElementComponent } from './group-page-element.component';

describe('GroupPageElementComponent', () => {
  let component: GroupPageElementComponent;
  let fixture: ComponentFixture<GroupPageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
