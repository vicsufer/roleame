import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { SharedComponentsModule } from 'app/shared-components/shared-components.module';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
