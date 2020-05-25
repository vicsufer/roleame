import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { TabletopPageComponent } from './tabletop-page.component';

describe('characterPageComponent', () => {
  let component: TabletopPageComponent;
  let fixture: ComponentFixture<TabletopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [TabletopPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
