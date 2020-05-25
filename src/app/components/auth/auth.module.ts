import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ConfirmCodeDialog, SignupComponent } from './signup/signup.component';



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
