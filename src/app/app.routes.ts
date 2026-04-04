import { Routes } from '@angular/router';
import { SplashComponent } from './modules/splash/splash.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AuthGuard } from './core/authGuard';
import { FormCapsuleComponent } from './modules/form-capsule/form-capsule.component';

export const routes: Routes = [
    //   { path: 'login', loadComponent: () => import('./core-components/signin/signin.component').then(m => m.SigninComponent), canActivate: [redirectLogin] },
    // { path: '', loadComponent: () => import('./modules/splash/splash.component').then(m => m.SplashComponent) },
    // { path: '/auth', loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent) },
    // { path: '/home', loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent) },

    // { path: '', component: SplashComponent },
    // { path: 'auth', component: AuthComponent },
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    // { path: 'form_capsula', component: FormCapsuleComponent, canActivate: [AuthGuard] }

    { path: '', component: SplashComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'form_capsula', component: FormCapsuleComponent}

];
