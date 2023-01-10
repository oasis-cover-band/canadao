import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteHeaderElementComponent } from './vote-header-element.component';

describe('VoteHeaderElementComponent', () => {
  let component: VoteHeaderElementComponent;
  let fixture: ComponentFixture<VoteHeaderElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteHeaderElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteHeaderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
