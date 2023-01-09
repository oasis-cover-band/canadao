import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDelegationElementComponent } from './user-page-delegation-element.component';

describe('UserPageDelegationElementComponent', () => {
  let component: UserPageDelegationElementComponent;
  let fixture: ComponentFixture<UserPageDelegationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageDelegationElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageDelegationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
