import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { CharactersComponent } from './characters/characters.component';
import { CharactersRoutingModule as CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, SharedComponentsModule, CharactersRoutingModule]
})
export class CharactersModule {}
