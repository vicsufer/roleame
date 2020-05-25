import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedComponentsModule } from '../../../shared-components/shared-components.module';

import { TileComponent } from './tile.component';

describe('tileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, NoopAnimationsModule, TranslateModule.forRoot()],
      declarations: [TileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
