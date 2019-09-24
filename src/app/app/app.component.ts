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
  ActionSettingsChangeAnimationsPageDisabled,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  ActionSettingsChangeLanguage
} from '../core/core.module';
import { selectCurrentUserEmail } from 'app/core/auth/auth.selectors';
import { ActionAuthLogout } from 'app/core/auth/auth.actions';

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
  currentUserEmail$: Observable<string>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private amplifyService: AmplifyService
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

    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signIn') {
        console.log(payload.data)
        this.amplifyService.auth().currentCredentials( (creds)=>console.log(creds) );
        //this.store.dispatch(actionAuthLogin({ user: creds  }));
      }
    });

    // this.amplifyService
    //   .auth()
    //   .currentAuthenticatedUser()
    //   .then(user => this.store.dispatch(actionAuthLogin({ user })))
    //   .catch(error => console.log(error));

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.currentUserEmail$ = this.store.pipe(select(selectCurrentUserEmail));
    this.currentUserEmail$.subscribe(user => console.log(user));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout() );
  }
}
