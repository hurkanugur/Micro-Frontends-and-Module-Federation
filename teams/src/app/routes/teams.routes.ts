import { Routes } from "@angular/router";

export const TEAMS_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../teams.component').then(c => c.TeamsComponent)
    },
    { path: '**', redirectTo: 'menu' },
];