import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladDetailsComponent } from './salad-details.component';

describe('SaladDetailsComponent', () => {
  let component: SaladDetailsComponent;
  let fixture: ComponentFixture<SaladDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
