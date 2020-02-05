import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';

import { AmplifyService } from 'aws-amplify-angular';
import { Hub } from 'aws-amplify';

import {
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated,
  selectCurrentUser,
  ActionSettingsChangeAnimationsPageDisabled,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  ActionSettingsChangeLanguage
} from '../core/core.module';
import { ActionAuthLogout, ActionAuthLogin } from 'app/core/auth/auth.actions';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { selectCurrentUserEmail } from 'app/core/auth/auth.selectors';

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
    { link: 'games', label: 'roleame-webapp.menu.games' },
    { link: 'characters', label: 'roleame-webapp.menu.characters' },
    { link: 'about', label: 'roleame-webapp.menu.about' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'roleame-webapp.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  currentUserEmail$: Observable<String>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private amplifyService: AmplifyService,
    private activatedRoute: ActivatedRoute
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.currentUserEmail$ = this.store.pipe(select(selectCurrentUserEmail));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  ngAfterViewInit(): void {
    // TODO
    // Use localstorage to verify if already signed in, if so, dispatch ActionAuthLogin

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
