import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { TabletopToolbarComponent } from './tabletop-toolbar.component';

describe('characterPageComponent', () => {
  let component: TabletopToolbarComponent;
  let fixture: ComponentFixture<TabletopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [TabletopToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
