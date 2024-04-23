import { TailwindComponent } from './modules/projeto/projeto home/tailwind/tailwind.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tailwind',
    pathMatch: 'full'
  },
  {
    path: 'tailwind',
    component: TailwindComponent,
  },
];
