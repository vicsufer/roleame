import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { NewCharacterComponent } from './new-character.component';

describe('newCharactersComponent', () => {
  let component: NewCharacterComponent;
  let fixture: ComponentFixture<NewCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [NewCharacterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
