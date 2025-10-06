import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  projects = [
    {
      name: 'Project One',
      description: 'Description for project one.',
      image: './images/project1.jpg',
      link: '/project/1'
    },
    {
      name: 'Project Two',
      description: 'Description for project two.',
      image: './images/project1.jpg',
      link: '/project/2'
    },
    {
      name: 'Project Three',
      description: 'Description for project three.',
      image: './images/project1.jpg',
      link: '/project/3'
    }
  ];

  showOverlayWithProjectName(event: any) {
    event.target.querySelector('a').classList.add('active');
  }
  hiddenOverlayWithProjectName(event: any) {
    event.target.querySelector('a').classList.remove('active');
  }
}
