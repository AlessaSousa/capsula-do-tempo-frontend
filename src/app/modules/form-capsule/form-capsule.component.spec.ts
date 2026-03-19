import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCapsuleComponent } from './form-capsule.component';

describe('FormCapsuleComponent', () => {
  let component: FormCapsuleComponent;
  let fixture: ComponentFixture<FormCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCapsuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
