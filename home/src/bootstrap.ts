import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterModule, withComponentInputBinding } from "@angular/router";
import { HomeComponent } from "./app/home.component";
import { HOME_ROUTES } from "./app/routes/home.routes";

bootstrapApplication(HomeComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule,
    ),
    provideRouter(
      HOME_ROUTES,
      withComponentInputBinding(), //--> For Input Binding (Requires Angular Version 16+)
    )
  ],
})