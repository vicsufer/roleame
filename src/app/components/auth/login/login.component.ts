import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'app/core/core.module';
import { AmplifyService } from 'aws-amplify-angular';

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
    private amplifyService: AmplifyService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  socialLogin(provider) {
    this.amplifyService
      .auth()
      .federatedSignIn({ provider })
      .then(user => {})
      .catch(err => {
        this.loginError(err);
      });
  }

  login() {
    if (this.loginForm.valid) {
      var username = this.loginForm.value.username;
      var password = this.loginForm.value.password;

      this.amplifyService
        .auth()
        .signIn(username, password)
        .then( user => {

        })
        .catch(err => {
          this.loginError(err);
        });
    }
  }

  loginError(err) {
    console.error(err)
    switch (err.code) {
      case 'UserNotConfirmedException':
        //TODO user not confirmed
        break;
      case 'UserNotFoundException':
        //TODO user not found
        break;
    }
  }
}
