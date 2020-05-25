import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletopPageComponent } from './page/tabletop-page.component';

const routes: Routes = [
  {
    path: '',
    component: TabletopPageComponent,
    data: { title: 'roleame-webapp.menu.games' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabletopRoutingModule {}
