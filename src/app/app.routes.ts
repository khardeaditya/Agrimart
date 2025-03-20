import { Routes } from '@angular/router';
import { ServiceHomeComponent } from './services-module/service-home/service-home.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path:'service', component: ServiceHomeComponent
    },
    {
        path:'home',component: HomeComponent
    }
];
