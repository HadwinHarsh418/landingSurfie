import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeStartedComponent } from './how-we-started.component';

describe('HowWeStartedComponent', () => {
  let component: HowWeStartedComponent;
  let fixture: ComponentFixture<HowWeStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeStartedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
