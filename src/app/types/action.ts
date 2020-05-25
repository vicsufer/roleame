import { ActionType } from './../core/services/API.service';
import { Tabletop } from './tabletop';
import { Player } from './player';

export class Action {
    timestamp: number;
    actionType: ActionType;
    player: string;
    payload: string;
    processedPayload?: DiceRollPayload | AttributeRollPaylod | ChallengePayload | AttackPayload | HealActionPayload;
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

export class HealActionPayload {
    healer: string;
    target: {
        characterID: string,
        characterName: string
    };
    rolled: number;
    bonifier: number;
    healPoints: number
}

export class ChallengePayload {
    attribute: string;
    challenger: {
        character: string;
        rolled: number;
        bonifier: number;
        total: number;
    };
    challenged: {
        character: string;
        rolled: number
        bonifier: number
        total: number
    };
}

export class AttackPayload {
    attacker: string;
    target: {
        characterID: string,
        characterName: string
    };
    rolled: number;
    attackBonifier: number;
    defenseBonifier: number;
    damagePoints: number;
}
