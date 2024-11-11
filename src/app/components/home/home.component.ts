import { Component } from '@angular/core';
import { AllProjectsComponent } from '../all-projects/all-projects.component';
import { ContacolComponent } from '../projects/contacol/contacol.component';
import { SpikerainbowComponent } from '../projects/spikerainbow/spikerainbow.component';
import { CresentiaComponent } from '../projects/cresentia/cresentia.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AllProjectsComponent,
    ContacolComponent,
    SpikerainbowComponent,
    CresentiaComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentComponent: string = 'all-projects'; // Componente inicial

  showComponent(component: string) {
    this.currentComponent = component; // Actualiza el componente actual
  }
}
