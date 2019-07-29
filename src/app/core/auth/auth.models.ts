import { AppState } from '../core.module';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';

export interface State extends AppState {
  authState: AuthState;
}

export enum AuthStateTypes {
  SIGNED_OUT = 'signedOut',
  SIGNED_IN = 'signedIn',
  MFA_REQUIRED = 'mfaRequired',
  NEW_PASSWORD_REQUIRED = 'newPasswordRequired'
}
