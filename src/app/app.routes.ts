import { Routes } from '@angular/router';
import { DocumentComponent } from './pages/document/document.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {path:"document",component:DocumentComponent},
    {path:"dashboard",component:DashboardComponent}
];
