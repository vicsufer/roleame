import { InteractionDialog } from './interaction/interaction.dialog';
import { TabletopToolbarComponent } from './toolbar/tabletop-toolbar.component';
import { TileComponent } from './tile/tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { TabletopRoutingModule} from './tabletop-routing.module';
import { TabletopPageComponent } from './page/tabletop-page.component';
import { ActionsLogComponent } from './actions-log/actions-log.component';

@NgModule({
  declarations: [TabletopPageComponent, TileComponent, TabletopToolbarComponent, ActionsLogComponent, InteractionDialog],
  imports: [CommonModule, SharedComponentsModule, TabletopRoutingModule],
  entryComponents: [InteractionDialog]
})
export class TabletopModule {}
