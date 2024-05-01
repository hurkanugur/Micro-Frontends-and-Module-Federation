import { Routes } from '@angular/router';
import { ApplicationType } from '../enums/application-type';
import { canActivateGuard } from '../guard/can-activate.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const HOST_ROUTES: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    {
        path: 'home',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'home',
            exposedModule: './routes'
        }).then(r => r.HOME_ROUTES),
        canActivate: [canActivateGuard],
        data: {
            applicationType: ApplicationType.home,
        }
    },
    {
        path: 'teams',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'teams',
            exposedModule: './routes'
        }).then(r => r.TEAMS_ROUTES),
        canActivate: [canActivateGuard],
        data: {
            applicationType: ApplicationType.Teams,
        }
    },
    {
        path: 'chat',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'chat',
            exposedModule: './routes'
        }).then(r => r.CHAT_ROUTES),
        canActivate: [canActivateGuard],
        data: {
            applicationType: ApplicationType.Chat,
        }
    },
    {
        path: 'mail',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'mail',
            exposedModule: './routes'
        }).then(r => r.MAIL_ROUTES),
        canActivate: [canActivateGuard],
        data: {
            applicationType: ApplicationType.Mail,
        }
    },
    { path: "**", redirectTo: 'home', pathMatch: "full" }
];