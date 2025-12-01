import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { HomeComponent } from './components/home/home';
import { FormMainComponent } from './components/form/form-main/form-main';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }

];
