import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './core/core.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'characters',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./components/characters/characters.module').then(
        m => m.CharactersModule
      )
  },
  {
    path: 'games',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./components/games/games.module').then(
        m => m.GamesModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
