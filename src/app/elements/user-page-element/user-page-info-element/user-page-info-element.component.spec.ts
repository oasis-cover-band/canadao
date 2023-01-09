import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageInfoElementComponent } from './user-page-info-element.component';

describe('UserPageInfoElementComponent', () => {
  let component: UserPageInfoElementComponent;
  let fixture: ComponentFixture<UserPageInfoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageInfoElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageInfoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
