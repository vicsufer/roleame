import { AmplifyService } from 'aws-amplify-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule, MatDialogModule, MatStepperModule, MatRadioModule, MatBadgeModule, MatGridListModule } from '@angular/material/';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule} from '@angular/material/expansion';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faGoogle,
  faFacebook,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
);

import { BigInputComponent } from './big-input/big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { RtlSupportDirective } from './rtl-support/rtl-support.directive';
import { Md5Pipe } from 'app/core/pipes/md5.pipe';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { APIService } from 'app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,

    TranslateModule,
    MaterialFileInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatStepperModule,
    FlexLayoutModule,
    MatRadioModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatChipsModule,
    MatBadgeModule,
    MatGridListModule
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    

    TranslateModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatDividerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MaterialFileInputModule,
    MatRadioModule,
    MatExpansionModule,
    MatBadgeModule,
    MatGridListModule,

    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ],
  providers: [
    AmplifyService,
    APIService,
    {provide: PERFECT_SCROLLBAR_CONFIG,useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class SharedComponentsModule {}
