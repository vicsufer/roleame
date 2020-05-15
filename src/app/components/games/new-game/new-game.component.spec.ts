import { EditGameComponent } from './../edit-game/edit-game.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { NewGameComponent } from './new-game.component';
import { GamesModule } from '../games.module';
import { GamesComponent } from '../games/games.component';
import { InvitationsComponent } from '../invitations/invitations.component';

describe('newGamesComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [NewGameComponent, EditGameComponent, InvitationsComponent, GamesComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
