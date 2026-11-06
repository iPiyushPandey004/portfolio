import { Component, HostListener, inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);

  menuOpen = false;
  activeSection = 'home';
  isLightTheme = false;

  readonly links = [
    { label: 'About', id: 'about' },
    { label: 'Resume', id: 'resume' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  ngOnInit(): void {
    this.isLightTheme = this.document.defaultView?.localStorage.getItem('portfolio-theme') === 'light';
    this.applyTheme();
  }

  closeMenu(): void { this.menuOpen = false; }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    this.document.defaultView?.localStorage.setItem('portfolio-theme', this.isLightTheme ? 'light' : 'dark');
    this.applyTheme();
  }

  private applyTheme(): void {
    this.renderer.setAttribute(
      this.document.documentElement,
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

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
