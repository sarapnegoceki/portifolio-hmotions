import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
