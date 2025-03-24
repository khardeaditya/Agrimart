import { Routes } from '@angular/router';
import { ServiceHomeComponent } from './services-module/service-home/service-home.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DispUsersComponent } from './disp-users/disp-users.component';
export const routes: Routes = [
    {
        path:'service', component: ServiceHomeComponent
    },
    {
        path:'home',component: HomeComponent
    },{
        path:'login', component: RegistrationComponent
    },{
        path:'disp', component:DispUsersComponent
    }
];
