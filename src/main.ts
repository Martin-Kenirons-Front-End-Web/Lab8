// Import necessary modules and providers from Angular, Ionic, and other libraries
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideServiceWorker } from '@angular/service-worker';

// Bootstrap the Angular application with the root component and required providers
bootstrapApplication(AppComponent, {
  providers: [
    // Use Ionic's route reuse strategy for better performance
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Provide Ionic Angular standalone module
    provideIonicAngular(),

    // Configure the router with application routes and preloading strategy
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // Import and configure Ionic Storage module
    importProvidersFrom(IonicStorageModule.forRoot()),

    // Enable service worker for production builds with a specific registration strategy
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(), // Enable only in production mode
      registrationStrategy: 'registerWhenStable:30000' // Register after the app is stable for 30 seconds
    })
  ],
});
