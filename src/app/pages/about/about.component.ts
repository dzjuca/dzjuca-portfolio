import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // 1. Importa
import { StatsComponent } from '../home/components/stats/stats.component';
import { AngularSvgIconModule } from 'angular-svg-icon'; // <-- Importa el módulo SVG

@Component({
  selector: 'app-about',
  standalone: true, // <-- Asegúrate de que esta línea esté presente
  imports: [TranslateModule, StatsComponent, AngularSvgIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

    // Array con tus redes sociales, ahora apuntando a los archivos SVG
  public socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dzjuca/', iconPath: 'assets/icons/social/linkedin.svg' },
    { name: 'Twitter', url:  'https://x.com/daniel3959', iconPath: 'assets/icons/social/twitter.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/dzjuca', iconPath: 'assets/icons/social/facebook.svg' },
    { name: 'YouTube', url:  'https://www.youtube.com/@dzjuca', iconPath: 'assets/icons/social/youtube.svg' }
  ];

}
