import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FajitaComponent } from './fajita.component';

describe('FajitaComponent', () => {
  let component: FajitaComponent;
  let fixture: ComponentFixture<FajitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FajitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
