import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http'; // <-- Imports actualizados
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon'; // <-- Importa el módulo correcto

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideHttpClient(),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          // 1. Usamos `useClass` para que Angular instancie TranslateHttpLoader
          //    y le inyecte sus dependencias (HttpClient y la configuración).
          useClass: TranslateHttpLoader
        },
        defaultLanguage: 'es'
      }),
      // Añade el módulo de iconos SVG, separado por una coma.
      AngularSvgIconModule.forRoot()
    ),
    // 2. Proveemos la configuración para TranslateHttpLoader usando su InjectionToken.
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: './assets/i18n/',
        suffix: '.json'
      }
    }
  ]
};
