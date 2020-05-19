import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { Action } from 'app/types/action';

@Component({
  selector: 'roleame-webapp-tabletop-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ActionsLogComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  actions: Action[];

  @Input()
  tabletop: Tabletop;

  currentUsername: string;

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private formBuilder: FormBuilder) {
      
  }

  ngOnInit() {

    // this.diceRollForm = this.formBuilder.group({
    //   dices: ['1', [Validators.required, Validators.min(1), Validators.max(20)]],
    //   sides: ['20', [Validators.required, Validators.min(2), Validators.max(1000)]],
    // });

    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username
    }).catch(err => console.log(err));

    //TODO obtaion 100 last actions for this game

  }

}
