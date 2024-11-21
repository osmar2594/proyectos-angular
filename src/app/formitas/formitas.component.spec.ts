import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormitasComponent } from './formitas.component';

describe('FormitasComponent', () => {
  let component: FormitasComponent;
  let fixture: ComponentFixture<FormitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
