import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../home.component').then(c => c.HomeComponent)
    },
    { path: '**', redirectTo: 'menu' },
];