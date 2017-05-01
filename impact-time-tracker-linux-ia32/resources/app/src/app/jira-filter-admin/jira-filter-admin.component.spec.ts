import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraFilterAdminComponent } from './jira-filter-admin.component';

describe('JiraFilterAdminComponent', () => {
  let component: JiraFilterAdminComponent;
  let fixture: ComponentFixture<JiraFilterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraFilterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraFilterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
