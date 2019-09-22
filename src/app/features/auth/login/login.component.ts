import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './../../../core/auth/auth.models';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService,
  AuthGuardService
} from 'app/core/core.module';
import { actionAuthLogin } from 'app/core/auth/auth.actions';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from 'aws-amplify';

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
    private store: Store<State>,
    private amplifyService: AmplifyService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  socialLogin(provider) {
    this.amplifyService.auth().federatedSignIn({ provider });
  }

  login() {
    if (this.loginForm.valid) {
      var email = this.loginForm.value.email;
      var password = this.loginForm.value.password;

      this.amplifyService
        .auth()
        .signIn(email, password)
        .then(user => console.log(user))
        .catch(err => {
          this.translateService
            .get('roleame-webapp.auth.login.errors.wrong_auth')
            .subscribe(value => {
              this.notificationService.error(value);
            });
        });

      this.store.dispatch(actionAuthLogin({ user: email }));
    }
  }
}
