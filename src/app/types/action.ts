import { ActionType } from './../core/services/API.service';
import { Tabletop } from './tabletop';
import { Player } from './player';

export class Action {
    createdAt: number;
    actionType: ActionType;
    player: string;
    payload: string;
}
