import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { ActionsLogComponent } from './actions-log.component';

describe('actionsLogComponent', () => {
  let component: ActionsLogComponent;
  let fixture: ComponentFixture<ActionsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [ActionsLogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
