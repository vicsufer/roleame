import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';  // this is new
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig)
PubSub.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
