import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { CharactersComponent } from './characters/characters.component';
import { CharactersRoutingModule as CharactersRoutingModule } from './characters-routing.module';
import { NewCharacterComponent } from './new-character/new-character.component';
import { CharactersPageComponent } from './page/characters-page.component';
import { EditCharacterComponent, ChangePortraitDialog } from './edit-character/edit-character.component';

@NgModule({
  declarations: [CharactersComponent, NewCharacterComponent, CharactersPageComponent, EditCharacterComponent, ChangePortraitDialog],
  imports: [CommonModule, SharedComponentsModule, CharactersRoutingModule],
  entryComponents: [ChangePortraitDialog]
})
export class CharactersModule {}
