import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusPrayComponent } from './campus-pray.component';

describe('CampusPrayComponent', () => {
  let component: CampusPrayComponent;
  let fixture: ComponentFixture<CampusPrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusPrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
