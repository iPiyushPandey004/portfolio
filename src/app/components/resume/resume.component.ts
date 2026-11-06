import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  showResumeNotice = false;
  readonly experiences = [
    {
      period: 'DECEMBER 2025 — CURRENT',
      role: 'Associate Consultant',
      company: 'Infosys',
      projects: [
        {
          name: 'American Express - Risk Decision Engine (Enterprise applications for American Express)',
          description: 'Contributing to enterprise applications using Java, Spring Boot, microservices, Kafka, RESTful APIs, Azure, SQL, and MongoDB. Focused on scalable backend solutions and reliable service delivery.'
        }
      ]
    },
    {
      period: 'MARCH 2022 — NOVEMBER 2025',
      role: 'Software Engineer (Java Developer)',
      company: 'LTIMindtree · Noida, India',
      projects: [
        {
          name: 'ULTIMA',
          description: 'Designed and implemented RESTful APIs and web services using Java 8. Worked on API scalability, security, and performance; wrote unit and integration tests; investigated microservice issues; refactored code to improve processing time and maintainability; integrated technologies; and supported new joiners.'
        },
        {
          name: 'CAPE — Composable Automated Platform for Enterprises',
          description: 'Contributed to an automation-first engineering platform. Resolved frontend bugs, refactored backend microservice APIs using Java 8, and used Jenkins CI/CD workflows to support delivery efficiency and team productivity.'
        }
      ]
    }
  ];
  readonly education = [
    { period: '2017 — 2021', title: 'Bachelor of Technology', institution: 'ABES Institute of Technology · Ghaziabad, India', detail: 'Computer Science & Engineering · Final grade: 73.60%' },
    { period: '2017', title: 'Senior Secondary School Certificate', institution: 'S.N. Public School · Mirzapur, India', detail: 'Final grade: 71.60%' },
    { period: '2015', title: 'Secondary School Certificate', institution: "St. Mary's School · Mirzapur, India", detail: 'Final grade: 82.80%' }
  ];
  readonly highlights = [
    { title: 'Publication · Springer Nature', detail: 'Chapter: “An Effective Parking Management And Slot Detection” in Cognitive Informatics and Soft Computing, February 2021.', link: 'https://link.springer.com/chapter/10.1007/978-981-16-8763-1_49' },
    { title: 'Light De Literacy NGO', detail: 'Volunteered as a teacher from 2017–2019, educating children from underserved slum communities.' },
    { title: 'District General Science Quiz', detail: 'Winner · 2016.' },
    { title: 'IIT BHU · Technex', detail: 'Campus Ambassador.' },
    { title: 'National Engineering Olympiad 3.0', detail: 'Qualified for the final stage.' }
  ];
}
