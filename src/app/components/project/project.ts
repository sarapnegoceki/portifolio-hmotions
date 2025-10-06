import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [Navbar, Footer, CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  readonly userId: string = '';
  private route = inject(ActivatedRoute);
  
  project = {
    title: 'Sample Project',
    subtitle: 'An example of a project component',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu consectetur nibh. Nam sit amet ullamcorper ex. Vestibulum sed luctus felis. Integer quis nunc ut augue mattis pulvinar. Aenean in ante nibh. Donec fringilla risus ut erat egestas luctus. Vivamus eget fringilla ante. Donec augue ante, sollicitudin vitae tempus at, fermentum in lacus. Suspendisse nec ante vel mi pretium egestas eget vitae nibh. Duis nisi elit, placerat at risus et, facilisis dapibus nisi. Phasellus dictum fringilla ullamcorper. Phasellus ut iaculis orci. Aliquam semper dictum eros eu accumsan. In nec malesuada leo, quis lobortis ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis erat ac porttitor rhoncus. Fusce dolor lectus, ullamcorper nec leo dictum, dictum tincidunt tortor. Etiam molestie rhoncus efficitur. Nam pulvinar, ex eu suscipit ultrices, nisl arcu gravida justo, sit amet bibendum lorem sem id turpis. Mauris tempus dui suscipit cursus posuere. Pellentesque eget lorem vitae tellus placerat fermentum sit amet at lorem. Donec rhoncus dui eget viverra consequat. Donec et risus vel magna efficitur suscipit. Duis id augue ullamcorper, dignissim mi vitae, lacinia magna. Curabitur in pretium odio, a commodo lorem. Aenean commodo libero non augue vestibulum, sit amet consequat tellus dapibus. Curabitur rhoncus nibh diam, nec lobortis nisi dapibus ac. Aenean feugiat velit a sagittis congue. Etiam ut sodales arcu. Morbi egestas, mi id hendrerit accumsan, libero magna posuere mauris, ac tempor libero dui vel lectus. In ultricies convallis sem sit amet eleifend.',
    imageHighlight: './images/project1.jpg',
    gallery: [
      './images/project2.png',
      './images/project2.png',
      './images/project2.png',
      './images/project2.png'
    ]
  };

  constructor() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.userId);
  }
}
