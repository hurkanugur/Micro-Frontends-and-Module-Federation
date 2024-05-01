import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterModule, withComponentInputBinding } from "@angular/router";
import { ChatComponent } from "./app/chat.component";
import { CHAT_ROUTES } from "./app/routes/chat.routes";

bootstrapApplication(ChatComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule,
    ),
    provideRouter(
      CHAT_ROUTES,
      withComponentInputBinding(), //--> For Input Binding (Requires Angular Version 16+)
    )
  ],
})