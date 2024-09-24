import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/home/home.component';
import { AppComponent } from './app/app.component';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }
    ]),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
