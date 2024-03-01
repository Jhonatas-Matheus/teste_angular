import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourWorkedBoxComponent } from './hour-worked-box.component';

describe('HourWorkedBoxComponent', () => {
  let component: HourWorkedBoxComponent;
  let fixture: ComponentFixture<HourWorkedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourWorkedBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourWorkedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
