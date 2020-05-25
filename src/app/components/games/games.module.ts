import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { GamesComponent } from './games/games.component';
import { GamesRoutingModule as GamesRoutingModule } from './games-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesPageComponent } from './page/games-page.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { InvitationsComponent } from './invitations/invitations.component';

@NgModule({
  declarations: [GamesComponent, NewGameComponent, GamesPageComponent, EditGameComponent, InvitationsComponent],
  imports: [CommonModule, SharedComponentsModule, GamesRoutingModule],
  entryComponents: []
})
export class GamesModule {}
