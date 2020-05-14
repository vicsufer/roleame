import { APIService } from 'app/core/services/API.service';
import { selectAuth } from './../../../core/auth/auth.selectors';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from 'app/core/core.module';
import { State } from 'app/core/auth/auth.models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ErrorStateMatcher,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material';
import {
  AuthState,
  AmplifyService
} from 'aws-amplify-angular/dist/src/providers';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'app/types/user';

@Component({
  selector: 'rolewebapp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  signupForm: FormGroup;
  signupMatcher: CustomErrorMatcher;

  hideSignupPassword: boolean = true;
  hideSignupPasswordConfirm: boolean = true;

  authState$: Observable<AuthState>;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private amplifyService: AmplifyService,
    public confirmDialog: MatDialog,
    private notificationService: NotificationService,
    private translationService: TranslateService,
    private apiService: APIService
  ) {
    this.authState$ = this.store.pipe(select(selectAuth));

    var signupMatcher = new CustomErrorMatcher();

    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            )
          ]
        ],
        passwordConfirm: ['', [Validators.required]],
        confirmTerms: ['', [Validators.requiredTrue]]
      },
      { validator: this.checkPasswords }
    );
  }

  ngOnInit() {}

  signup() {
    if (this.signupForm.valid) {
      var user: User = {
        username: this.signupForm.controls.username.value,
        email:  this.signupForm.controls.email.value
      }
      var password = this.signupForm.controls.password.value;
      this.amplifyService
        .auth()
        .signUp({
          username: user.username, 
          password,
          email: user.email,
          attributes: {
            email: user.email
          }
        })
        .then(res => {
          this.showModalVerifyEmail(user.email);
        })
        .catch(err => {
          console.log(err);
          switch (err.code) {
            case 'UsernameExistsException':
              this.translationService
                .get('roleame-webapp.auth.signup.errors.email_used')
                .subscribe(translation =>
                  this.notificationService.error(translation)
                );
              break;
          }
        });
    }
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  showModalVerifyEmail(username: string): void {
    const dialogRef = this.confirmDialog.open(ConfirmCodeDialog, {
      width: '250px',
      height: '250px'
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm.dialog.html',
  styleUrls: ['confirm.dialog.scss']
})
export class ConfirmCodeDialog {
  constructor(public dialogRef: MatDialogRef<SignupComponent>) {}
}

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );
    return invalidCtrl || invalidParent;
  }
}
