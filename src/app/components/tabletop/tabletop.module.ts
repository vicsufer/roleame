import { TileComponent } from './tile/tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { TabletopRoutingModule} from './tabletop-routing.module';
import { TabletopPageComponent } from './page/tabletop-page.component';

@NgModule({
  declarations: [TabletopPageComponent, TileComponent],
  imports: [CommonModule, SharedComponentsModule, TabletopRoutingModule],
  entryComponents: []
})
export class TabletopModule {}
