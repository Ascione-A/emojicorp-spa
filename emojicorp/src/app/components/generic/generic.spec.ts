import { ComponentFixture, TestBed } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GenericComponent } from './generic';

describe('GenericComponent', () => {
  let component: GenericComponent;
  let fixture: ComponentFixture<GenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});