import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then(
        (render) => render.PlayerModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((render) => render.LoginModule),
  },
];
