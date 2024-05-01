import { Routes } from "@angular/router";

export const MAIL_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../mail.component').then(c => c.MailComponent)
    },
    { path: '**', redirectTo: 'menu' },
];