import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Project } from './components/project/project';

export const routes: Routes = [
    {
        path: '',
        component: Welcome,
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'project/:id',
        component: Project
    },
];
