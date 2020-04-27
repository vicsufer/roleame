import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';
import { Hub } from 'aws-amplify';

import {
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsLanguage,
  selectEffectiveTheme,
  ActionSettingsChangeLanguage
} from '../core/core.module';
import { ActionAuthLogout, ActionAuthLogin } from 'app/core/auth/auth.actions';
import { selectCurrentUserEmail } from 'app/core/auth/auth.selectors';
import { ActionSettingsChangeAnimationsPage } from 'app/core/settings/settings.actions';

@Component({
  selector: 'roleame-webapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../../assets/logo.png');
  languages = ['en', 'es'];
  navigation = [
    { link: 'about', label: 'roleame-webapp.menu.about' }
  ];
  privateNavigation = [
    { link: 'games', label: 'roleame-webapp.menu.games' },
    { link: 'characters', label: 'roleame-webapp.menu.characters' }
  ]
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'roleame-webapp.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  currentUserEmail$: Observable<String>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();

    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPage({pageAnimations: false})
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.currentUserEmail$ = this.store.pipe(select(selectCurrentUserEmail));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          this.store.dispatch(new ActionAuthLogin());
          break;
        default:
          break;
      }
    });
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }
}
