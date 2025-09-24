import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

    public technologies = [
    { name: 'Angular', iconUrl: 'assets/icons/tech/angular.svg' },
    { name: 'Node.js', iconUrl: 'assets/icons/tech/nodejs.svg' },
    { name: 'NestJS', iconUrl: 'assets/icons/tech/nestjs.svg' },
    { name: 'Python', iconUrl: 'assets/icons/tech/python.svg' },
    { name: 'Docker', iconUrl: 'assets/icons/tech/docker.svg' },
    { name: 'PostgreSQL', iconUrl: 'assets/icons/tech/postgresql.svg' },
    { name: 'Git', iconUrl: 'assets/icons/tech/git.svg' },
    { name: 'GitHub', iconUrl: 'assets/icons/tech/github.svg' },
    { name: 'Flutter', iconUrl: 'assets/icons/tech/flutter.svg' },
    { name: 'Spring Boot', iconUrl: 'assets/icons/tech/spring.svg' },
    { name: 'Matlab', iconUrl: 'assets/icons/tech/matlab.svg' },
    { name: 'VS Code', iconUrl: 'assets/icons/tech/vscode.svg' },
    // ...Añade todas las que quieras
    { name: 'Android', iconUrl: 'assets/icons/tech/android.svg' },
    { name: 'C++', iconUrl: 'assets/icons/tech/cpp.svg' },
    { name: 'Ionic', iconUrl: 'assets/icons/tech/ionic.svg' },
    { name: 'Java', iconUrl: 'assets/icons/tech/java.svg' },
    { name: 'JavaScript', iconUrl: 'assets/icons/tech/javascript.svg' },
    { name: 'TypeScript', iconUrl: 'assets/icons/tech/typescript.svg' },
    { name: 'MongoDB', iconUrl: 'assets/icons/tech/mongodb.svg' },
    { name: 'Swift', iconUrl: 'assets/icons/tech/swift.svg' },
    { name: 'Xcode', iconUrl: 'assets/icons/tech/xcode.svg' },
    { name: 'Pytorch', iconUrl: 'assets/icons/tech/pytorch.svg' },
    { name: 'TensorFlow', iconUrl: 'assets/icons/tech/tensorflow.svg' },
  ];

}
