import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPageComponent } from './page/games-page.component';

const routes: Routes = [
  {
    path: '',
    component: GamesPageComponent,
    data: { title: 'roleame-webapp.menu.games' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {}
