import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import emailjs from '@emailjs/browser';

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


  public isSubmitting: boolean = false;

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
      message: ['', [Validators.required, Validators.minLength(10)]],
      honeypot: ['']
    });
    // Creamos el enlace del teléfono sin espacios
    this.contactPhoneLink = 'tel:' + this.contactPhone.replace(/\s/g, '');
  }

  // --- Métodos Públicos ---
  onSubmit() {

    // 1. Verificamos si el bot cayó en la trampa
    if (this.contactForm.value.honeypot) {
      console.log('Bot detectado!');
      this.contactForm.reset();
      return; // Detenemos la ejecución aquí
    }

    // 2. Si el humano es real, seguimos con el envío...
    if (this.contactForm.valid) {
      this.isSubmitting = true; // 1. Bloqueamos el botón
      // 2. Extraemos los valores del formulario
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };
      // 3. Enviamos a EmailJS usando tus claves del environment
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      )
        .then(() => {
          // ÉXITO
          this.translate.get('CONTACT.FORM_SUCCESS').subscribe(res => alert(res));
          this.contactForm.reset();
        })
        .catch((error) => {
          // ERROR
          console.error('EmailJS Error:', error);
          this.translate.get('CONTACT.FORM_ERROR').subscribe(res => alert(res));
        })
        .finally(() => {
          this.isSubmitting = false; // 4. Desbloqueamos el botón pase lo que pase
        });
    }
  }
}
