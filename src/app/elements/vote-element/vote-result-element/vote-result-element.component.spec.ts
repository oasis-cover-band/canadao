import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteResultElementComponent } from './vote-result-element.component';

describe('VoteResultElementComponent', () => {
  let component: VoteResultElementComponent;
  let fixture: ComponentFixture<VoteResultElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteResultElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteResultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
