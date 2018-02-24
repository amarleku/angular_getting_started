import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasDetailsComponent } from './extras-details.component';

describe('ExtrasDetailsComponent', () => {
  let component: ExtrasDetailsComponent;
  let fixture: ComponentFixture<ExtrasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
