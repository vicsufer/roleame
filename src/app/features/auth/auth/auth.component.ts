import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../core/core.module';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'roleame-webapp-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  
  hidePassword: boolean = true;
  hidePasswordConfirm: boolean = true;

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  signupForm: FormGroup;
  signupMatcher: CustomErrorMatcher;
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) {

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

  checkPasswords(group) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;
    return (pass === confirmPass)? null : { notSame: true }     
  }


  signup() {
    console.log( this.signupForm )
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
}

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

