import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    title = 'Chekresh Portfolio';
    isScrolled = false;
    activeSection = '';

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 20;
        this.updateActiveSection();
    }

    private updateActiveSection() {
        this.activeSection = window.location.hash;
    }

    isActive(section: string): boolean {
        return this.isScrolled && this.activeSection === section;
    }
}
