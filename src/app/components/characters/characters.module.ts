import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { charactersComponent } from './characters/characters.component';
import { charactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [charactersComponent],
  imports: [CommonModule, SharedComponentsModule, charactersRoutingModule]
})
export class charactersModule {}
