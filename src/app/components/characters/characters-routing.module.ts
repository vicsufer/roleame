import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './page/characters-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersPageComponent,
    data: { title: 'roleame-webapp.menu.characters' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {}
