import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// Inicializa a aplicação no navegador e reaproveita o HTML renderizado.
bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(withEventReplay())
  ]
}).catch(console.error);
