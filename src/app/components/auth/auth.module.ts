import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '../../shared-components/shared-components.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { LoginComponent } from './login/login.component';
import { SignupComponent, ConfirmCodeDialog } from './signup/signup.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ConfirmCodeDialog
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AuthRoutingModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService],
  entryComponents: [ConfirmCodeDialog]
})
export class AuthModule {}
