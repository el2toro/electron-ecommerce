import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => 
          import('./features/landing-page-feature/landing-page-feature.module').then((m) => m.FeatureLandingPageModule)
      }
];
