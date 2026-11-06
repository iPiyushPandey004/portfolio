import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects = [
    { number: '01', slug: 'parking-management', type: 'PERSONAL PROJECT', name: 'Parking Management and Slot Detection', description: 'A personal project focused on parking management and slot detection. Explore the source code and implementation in the GitHub repository.', tags: ['Angular', 'Parking Management', 'Slot Detection'], github: 'https://github.com/YadavVicky/ParCare-Angular-Update', accent: 'violet' }
  ];
}
