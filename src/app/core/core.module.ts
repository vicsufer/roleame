import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { environment } from '../../environments/environment';
import { AnimationsService } from './animations/animations.service';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from './animations/route.animations';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthEffects } from './auth/auth.effects';
import { selectAuth, selectCurrentUser, selectIsAuthenticated } from './auth/auth.selectors';
import { AppState, metaReducers, reducers, selectRouterState } from './core.state';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { LocalStorageService } from './local-storage/local-storage.service';
import { Md5Pipe } from './pipes/md5.pipe';
import { CustomSerializer } from './router/custom-serializer';
import { APIService } from './services/API.service';
import { ActionSettingsChangeLanguage, SettingsActions, SettingsActionTypes } from './settings/settings.actions';
import { SettingsEffects } from './settings/settings.effects';
import { selectEffectiveTheme, selectSettingsLanguage } from './settings/settings.selectors';
import { TitleService } from './title/title.service';



export { TitleService, selectAuth, routeAnimations, AppState, APIService, LocalStorageService, selectIsAuthenticated, selectCurrentUser, ROUTE_ANIMATIONS_ELEMENTS, AnimationsService, AuthGuardService, selectRouterState, SettingsActions, SettingsActionTypes, ActionSettingsChangeLanguage, selectEffectiveTheme, selectSettingsLanguage };

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    //Amplify
    AmplifyAngularModule,

    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects, SettingsEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Roleame'
        }),

    // 3rd party
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [Md5Pipe],
  providers: [
    { provide: AmplifyService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: APIService }
  ],
  exports: [TranslateModule, Md5Pipe]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
