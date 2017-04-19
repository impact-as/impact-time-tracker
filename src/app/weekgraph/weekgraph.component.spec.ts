import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekgraphComponent } from './weekgraph.component';

describe('WeekgraphComponent', () => {
  let component: WeekgraphComponent;
  let fixture: ComponentFixture<WeekgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
