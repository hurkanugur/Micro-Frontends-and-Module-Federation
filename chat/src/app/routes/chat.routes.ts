import { Routes } from "@angular/router";

export const CHAT_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: "full" },
    {
        path: 'menu',
        loadComponent: () => import('../chat.component').then(c => c.ChatComponent)
    },
    { path: '**', redirectTo: 'menu' },
];