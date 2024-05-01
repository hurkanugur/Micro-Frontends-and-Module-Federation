import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterModule, withComponentInputBinding } from "@angular/router";
import { HostComponent } from "./app/host.component";
import { HOST_ROUTES } from "./app/routes/host.routes";

bootstrapApplication(HostComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule,
    ),
    provideRouter(
      HOST_ROUTES,
      withComponentInputBinding(), //--> For Input Binding (Requires Angular Version 16+)
    )
  ],
})