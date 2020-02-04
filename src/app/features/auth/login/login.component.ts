import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './../../../core/auth/auth.models';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService,
  AuthGuardService,
  AppState
} from 'app/core/core.module';
import { TranslateService } from '@ngx-translate/core';
import { ActionAuthLogin } from 'app/core/auth/auth.actions';

@Component({
  selector: 'rolewebapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  hideLoginPassword: boolean = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private amplifyService: AmplifyService,
    private notificationService: NotificationService,
    private translateService: TranslateService,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  socialLogin(provider) {
    this.amplifyService
      .auth()
      .federatedSignIn({ provider })
      .then(user => {
        this.store.dispatch(new ActionAuthLogin(user));
      })
      .catch(err => {
        this.loginError(err);
      });
  }

  login() {
    if (this.loginForm.valid) {
      var email = this.loginForm.value.email;
      var password = this.loginForm.value.password;

      this.amplifyService
        .auth()
        .signIn(email, password)
        .then(user => {
          this.store.dispatch(new ActionAuthLogin(user));
        })
        .catch(err => {
          this.loginError(err);
        });
    }
  }

  loginError(err) {
    switch (err.code) {
      case 'UserNotConfirmedException':
        this.translateService
          .get('roleame-webapp.auth.login.errors.no-verified')
          .subscribe(value => {
            this.notificationService.error(value);
          });
        break;
    }
  }
}
