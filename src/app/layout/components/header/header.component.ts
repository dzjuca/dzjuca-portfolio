import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    // Inyectamos el servicio de traducción
  constructor(public translate: TranslateService) {}

  // Función para cambiar el idioma de la aplicación
  public switchLanguage(language: string): void {
    this.translate.use(language);
  }

}
