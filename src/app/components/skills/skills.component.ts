import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly groups = [
    { title: 'Backend & APIs', code: '01', skills: ['Java', 'Spring Boot', 'Spring MVC', 'RESTful APIs', 'Microservices'] },
    { title: 'Persistence & Messaging', code: '02', skills: ['Hibernate / JPA', 'SQL', 'MongoDB', 'Kafka', 'Dell Boomi'] },
    { title: 'Quality & Engineering', code: '03', skills: ['Mockito', 'Test Driven Development', 'DSA', 'Agile Methodologies'] },
    { title: 'Tools & Cloud', code: '04', skills: ['Eclipse', 'Git', 'VS Code', 'Azure'] },
    { title: 'Soft Skills', code: '05', skills: ['Goal-Oriented', 'Problem Solving', 'Empathy', 'Adaptability', 'Collaboration'] }
  ];
}
