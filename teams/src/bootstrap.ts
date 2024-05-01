import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterModule, withComponentInputBinding } from "@angular/router";
import { TEAMS_ROUTES } from "./app/routes/teams.routes";
import { TeamsComponent } from "./app/teams.component";

bootstrapApplication(TeamsComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule,
    ),
    provideRouter(
      TEAMS_ROUTES,
      withComponentInputBinding(), //--> For Input Binding (Requires Angular Version 16+)
    )
  ],
})