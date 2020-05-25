import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ActionAuthLogin, ActionAuthLogout } from 'app/core/auth/auth.actions';
import { selectCurrentUserEmail } from 'app/core/auth/auth.selectors';
import { APIService } from 'app/core/services/API.service';
import { ActionSettingsChangeAnimationsPage } from 'app/core/settings/settings.actions';
import { Hub } from 'aws-amplify';
import browser from 'browser-detect';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { ActionSettingsChangeLanguage, AppState, LocalStorageService, routeAnimations, selectEffectiveTheme, selectIsAuthenticated, selectSettingsLanguage } from '../core/core.module';



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
  ];
  privateNavigation = [
    { link: 'games', label: 'roleame-webapp.menu.games' },
    { link: 'characters', label: 'roleame-webapp.menu.characters' }
  ]
  navigationSideMenu = [
    ...this.navigation
  ];

  isAuthenticated$: Observable<boolean>;
  currentUserEmail$: Observable<String>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private apiService: APIService,
    public router: Router
  ) {
 
  }

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
          //Check if it is first login
          this.apiService.GetUserData(data.username).then( user => {
            if(!user){
              this.apiService.CreateUser( {username: data.username, email: data.attributes.email} ).then( () =>
                this.store.dispatch(new ActionAuthLogin())
               ).catch( e => console.error(e))
            } else {
              this.store.dispatch(new ActionAuthLogin())
            }
          }).catch( e => console.error(e))
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
