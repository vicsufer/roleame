import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedComponentsModule } from './shared-components/shared-components.module';
import { CoreModule, APIService } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
Storage

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    //Amplify
    AmplifyAngularModule,

    // core & shared
    CoreModule,
    SharedComponentsModule,

    // app
    AppRoutingModule
  ],
  providers: [AmplifyService, APIService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
