import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAListaComponent } from './agregar-alista.component';

describe('AgregarAListaComponent', () => {
  let component: AgregarAListaComponent;
  let fixture: ComponentFixture<AgregarAListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarAListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
