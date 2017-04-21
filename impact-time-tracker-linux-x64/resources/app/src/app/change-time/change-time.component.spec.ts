import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTimeComponent } from './change-time.component';

describe('ChangeTimeComponent', () => {
  let component: ChangeTimeComponent;
  let fixture: ComponentFixture<ChangeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
