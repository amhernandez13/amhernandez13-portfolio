import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private scrollService: ScrollService,
    private location: Location
  ) {}

  scrollToSection(event: Event, section: string) {
    event.preventDefault();
    this.scrollService.scrollTo(section); // Llama al servicio de desplazamiento
  }

  switchLanguage() {
    const currentUrl = this.location.path();
    const isEnglish = !currentUrl.includes('/es/');
    const newUrl = isEnglish
      ? `/es${currentUrl}`
      : currentUrl.replace('/es', '');
    window.location.href = newUrl;
  }
}
