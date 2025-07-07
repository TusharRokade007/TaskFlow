import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProjectComponent } from './projects/project/project.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent,canActivate: [authGuard], }, // Default child
      { path: 'projects', component: ProjectComponent,canActivate: [authGuard] }
      // Add other child routes here
    ],
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '' } // fallback to dashboard
];
