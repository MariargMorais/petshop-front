import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
=======
import { provideHttpClient } from '@angular/common/http'; // Importação necessária
>>>>>>> c75441d277052b718f39fed5f5836972c3dd76ca
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideRouter(routes), 
=======
    provideRouter(routes),
>>>>>>> c75441d277052b718f39fed5f5836972c3dd76ca
    provideClientHydration(),
    provideHttpClient()
  ]
};
