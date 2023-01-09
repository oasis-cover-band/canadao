import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageElementComponent } from './user-page-element.component';

describe('UserPageElementComponent', () => {
  let component: UserPageElementComponent;
  let fixture: ComponentFixture<UserPageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
