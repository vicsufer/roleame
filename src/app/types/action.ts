import { ActionType } from './../core/services/API.service';
import { Tabletop } from './tabletop';
import { Player } from './player';

export class Action {
    timestamp: number;
    actionType: ActionType;
    player: string;
    payload: string;
    processedPayload?: DiceRollPayload | AttributeRollPaylod | ChallengePayload | AttackPayload | HealPayload;
    tabletopID: string;
}


export class DiceRollPayload {
    rolls: number[];
    total: number;
}

export class AttributeRollPaylod {
    attribute: string;
    bonifier: number;
    rolled: number;
    total: number;
}

export class HealPayload {
    source: string;
    target: string
    bonifier: number;
    rolled: number;
    total: number;
}

export class ChallengePayload {
    attribute: string;
    bonifier: number;
    rolled: number;
    total: number;
}

export class AttackPayload {
    source: string;
    target: string;
    rolled: number;
    bonifier: number;
    total: number;
}