import {
  bootstrapApplication,
  BootstrapContext
} from '@angular/platform-browser';

import {
  provideServerRendering,
  withRoutes,
  RenderMode
} from '@angular/ssr';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// Prepara a aplicação para renderização e pré-geração no servidor.
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(
    AppComponent,
    {
      providers: [
        provideClientHydration(withEventReplay()),
        provideServerRendering(
          withRoutes([
            {
              path: '**',
              renderMode: RenderMode.Prerender
            }
          ])
        )
      ]
    },
    context
  );

export default bootstrap;
