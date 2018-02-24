import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FajitaDetailsComponent } from './fajita-details.component';

describe('FajitaDetailsComponent', () => {
  let component: FajitaDetailsComponent;
  let fixture: ComponentFixture<FajitaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajitaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FajitaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
