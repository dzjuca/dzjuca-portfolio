import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [    
    CommonModule,
    TranslateModule,
    AngularSvgIconModule,
    ReactiveFormsModule // <-- Importante para formularios reactivos
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  // --- Propiedades Públicas ---
  public contactForm!: FormGroup; // Usamos '!' para indicar a TS que será inicializado en el constructor.
  public contactEmail: string = 'dzjuca@gmail.com';
  public contactPhone: string = '+593 98 474 6276';
  public contactPhoneLink: string; // Nueva propiedad para el enlace 'tel:'

  // --- Constructor ---
  constructor(private fb: FormBuilder, private translate: TranslateService) {
    // Inicializamos el formulario
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    // Creamos el enlace del teléfono sin espacios
    this.contactPhoneLink = 'tel:' + this.contactPhone.replace(/\s/g, '');
  }

  // --- Métodos Públicos ---
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario Enviado:', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario a un backend.
      
      // Usamos el servicio de traducción para obtener el mensaje de éxito
      this.translate.get('CONTACT.FORM_SUCCESS').subscribe((res: string) => {
        alert(res);
        this.contactForm.reset();
      });
    } else {
      console.log('Formulario inválido');
      // Usamos el servicio de traducción para obtener el mensaje de error
      this.translate.get('CONTACT.FORM_ERROR').subscribe((res: string) => {
        alert(res);
      });
    }
  }
}
