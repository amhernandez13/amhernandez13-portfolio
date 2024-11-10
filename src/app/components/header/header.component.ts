import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(event: Event, section: string) {
    event.preventDefault();
    this.scrollService.scrollTo(section); // Llama al servicio de desplazamiento
  }
}
