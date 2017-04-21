import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeJiraIdComponent } from './change-jira-id.component';

describe('ChangeJiraIdComponent', () => {
  let component: ChangeJiraIdComponent;
  let fixture: ComponentFixture<ChangeJiraIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeJiraIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeJiraIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
