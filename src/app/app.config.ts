import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // withHashLocation: las URLs quedan como /#/about, así funcionan en GitHub Pages sin errores 404
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
  ],
};
