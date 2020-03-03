import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { charactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: charactersComponent,
    data: { title: 'roleame-webapp.menu.characters' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class charactersRoutingModule {}
