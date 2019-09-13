import { selectAuth } from './../../../core/auth/auth.selectors';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'app/core/core.module';
import { State } from 'app/core/auth/auth.models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';

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

  authState$: Observable<AuthState>

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
  ) {

    this.authState$ = this.store.pipe( select( selectAuth ) )

    var signupMatcher = new CustomErrorMatcher();

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]],
      passwordConfirm: ['', [
        Validators.required,
      ]],
      confirmTerms: ['', [Validators.requiredTrue]],
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
  }

  signup() {
    /*
    if (this.signupForm.valid) {
      this.notificationService.info(
        (this.signupForm.value.confirmTerms
          ? this.translate.instant('roleame-webapp.examples.form.text4')
          : this.translate.instant('roleame-webapp.examples.form.text5')) +
          ' : ' +
          this.translate.instant('roleame-webapp.examples.form.text6')
      );
    }
    */
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;
    return (pass === confirmPass)? null : { notSame: true }     
  }
}




export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}