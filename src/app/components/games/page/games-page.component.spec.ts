import { InvitationsComponent } from './../invitations/invitations.component';
import { GamesComponent } from './../games/games.component';
import { NewGameComponent } from './../new-game/new-game.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { GamesPageComponent } from './games-page.component';
import { EditGameComponent } from '../edit-game/edit-game.component';

describe('gamesPageComponent', () => {
  let component: GamesPageComponent;
  let fixture: ComponentFixture<GamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [GamesPageComponent, EditGameComponent, NewGameComponent, GamesComponent, InvitationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
