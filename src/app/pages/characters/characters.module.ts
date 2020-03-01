import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { charactersComponent } from './characters/characters.component';
import { charactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [charactersComponent],
  imports: [CommonModule, SharedModule, charactersRoutingModule]
})
export class charactersModule {}
