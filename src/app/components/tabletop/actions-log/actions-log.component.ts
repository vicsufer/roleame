import { HealActionPayload } from './../../../types/action';
import { TranslateService } from '@ngx-translate/core';
import { DiceRoller } from './../../../types/diceroller';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS, routeAnimations } from '../../../core/core.module';
import { APIService, ActionType, ModelSortDirection } from 'app/core/services/API.service';
import { Tabletop } from 'app/types/tabletop';
import { Action } from 'app/types/action';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'roleame-webapp-tabletop-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ActionsLogComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @ViewChild('chatScrollbar', {static: true}) chatScrollbar?: PerfectScrollbarComponent;

  actions: Action[] = [];

  @Input()
  tabletop: Tabletop;

  @Output()
  heal: EventEmitter<{characterID: string, healPoints: number}> = new EventEmitter<{characterID: string, healPoints: number}>()
  @Output()
  attack: EventEmitter<{characterID: string, damagePoints: number}> = new EventEmitter<{characterID: string, damagePoints: number}>()

  currentUsername: string;

  chatForm: FormGroup

  playerCharacters: {name: string, id: string, uuid: string, hitPoints: number}[] = []

  constructor(private apiService: APIService,
    private amplifyService: AmplifyService,
    private formBuilder: FormBuilder,
    private translateService: TranslateService) {
      
  }

  ngOnInit() {

    this.chatForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.max(200)]],
    });

    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.currentUsername = user.username
    }).catch(err => console.error(err));


    this.apiService.OnCreateActionListener.subscribe({
      next: (newAction) => {
        newAction = newAction.value.data.onCreateAction
        if( newAction.tabletopID !== this.tabletop.id ) return;
        newAction = this.processReceivedAction(newAction)
        this.actions.push(newAction)
        //Little interval before scroll to let ngFor update
        setTimeout( () => {
          this.chatScrollbar.directiveRef.scrollToBottom();
        },60)},
      error: error => console.error(error)
    });

    //Subscription to custom mutations
    this.apiService.OnNewActionListener.subscribe({
      next: (newAction) => {
        newAction = newAction.value.data.onNewAction
        if( newAction.tabletopID !== this.tabletop.id ) return;
        newAction = this.processReceivedAction(newAction)
        this.actions.push(newAction)
        if( newAction.actionType == ActionType.HEAL ) {
          this.heal.emit( { characterID: newAction.processedPayload.target.characterID, healPoints: newAction.processedPayload.healPoints} )
        }
        if( newAction.actionType == ActionType.ATTACK ) {
          this.attack.emit( { characterID: newAction.processedPayload.target.characterID, damagePoints: newAction.processedPayload.damagePoints} )
        }
        setTimeout( () => {
          this.chatScrollbar.directiveRef.scrollToBottom();
        },60)},
      error: error => console.error(error)
    });

    // Get last 100 actions for this tabletop
    console.log(this.tabletop.id)
    this.apiService.ListActionsByTimestamp(this.tabletop.id, ModelSortDirection.ASC, undefined, 100).then( retrievedActions => {
      this.actions = retrievedActions.items.map( (action) => {
        var aux = this.processReceivedAction(action)
        return aux;
      });
      setTimeout( () => {
        this.chatScrollbar.directiveRef.scrollToBottom();
      },60)
    }).catch(err => console.error(err));
  }

  sendMessage(){
    var message = this.chatForm.get('message').value
    var action: Action
    action =  {
      timestamp: new Date().getTime(),
      actionType: ActionType.CHAT,
      payload: message,
      player: this.currentUsername,
      tabletopID: this.tabletop.id
    }
    this.apiService.CreateAction(action).then( (res) => {}).catch(err => console.error(err));
    this.chatForm.setValue({message:''})
    this.chatForm.markAsPristine
  }

  processReceivedAction(action: Action): Action{
    if( action.actionType == ActionType.DICEROLL ){
      action.processedPayload = JSON.parse(action.payload);
    }
    
    else if( action.actionType == ActionType.ATTRIBUTEROLL ){
      action.processedPayload = JSON.parse(action.payload);
      // action.processedPayload =  {
      //   attribute: extract.attribute, //this.translateService.instant(`roleame-webapp.label.${extract.attribute}`),
      //   bonifier: extract.bonifier,
      //   rolled: extract.rolled,
      //   total: extract.total
      // }
    }

    else if( action.actionType == ActionType.CHALLENGE ){
      action.processedPayload = JSON.parse(action.payload);
    }
    else if( action.actionType == ActionType.HEAL ){
      action.processedPayload = JSON.parse(action.payload) as HealActionPayload;
    }
    else if( action.actionType == ActionType.ATTACK ){
      action.processedPayload = JSON.parse(action.payload);
    }

    return action
  }

}
