import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;
  activeSection = 'home';

  readonly links = [
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  closeMenu(): void { this.menuOpen = false; }

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = ['home', ...this.links.map((link) => link.id)];
    let current = 'home';
    for (const id of sections) {
      const element = document.getElementById(id);
      if (element && element.getBoundingClientRect().top <= 150) current = id;
    }
    this.activeSection = current;
  }
}
