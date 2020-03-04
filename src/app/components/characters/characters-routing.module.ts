import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    data: { title: 'roleame-webapp.menu.characters' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {}
