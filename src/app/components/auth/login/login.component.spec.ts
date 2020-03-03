import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { SharedComponentsModule } from 'app/shared-components/shared-components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        SharedComponentsModule,
        AmplifyAngularModule,
        RouterTestingModule,
        NoopAnimationsModule,
        TranslateModule.forRoot()
      ],
      providers: [
          AmplifyService,
          provideMockStore({
          initialState: {
            settings: {},
            auth: {}
          }
        })
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
