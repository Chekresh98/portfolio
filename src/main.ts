import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRouting } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(appRouting)
  ]
}).catch(err => console.error(err));
