import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameElementComponent } from './user-name-element.component';

describe('UserNameElementComponent', () => {
  let component: UserNameElementComponent;
  let fixture: ComponentFixture<UserNameElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNameElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
