import { ActionType } from './../core/services/API.service';
import { Tabletop } from './tabletop';
import { Player } from './player';

export class Action {
    timestamp: number;
    actionType: ActionType;
    player: string;
    payload: string;
    tabletopID: string;
}
