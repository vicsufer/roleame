import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';


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
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
