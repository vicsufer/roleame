import { NewCharacterComponent } from './../new-character/new-character.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { CharactersPageComponent } from './characters-page.component';
import { EditCharacterComponent } from '../edit-character/edit-character.component';
import { CharactersComponent } from '../characters/characters.component';

describe('charactersomponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [CharactersPageComponent, EditCharacterComponent, CharactersComponent, NewCharacterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
