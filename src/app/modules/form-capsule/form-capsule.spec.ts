import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCapsule } from './form-capsule';

describe('FormCapsule', () => {
  let component: FormCapsule;
  let fixture: ComponentFixture<FormCapsule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCapsule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCapsule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
