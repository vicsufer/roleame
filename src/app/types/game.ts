import { Tabletop } from './tabletop';
import { Player } from './player';

export class Game {
    id: string;
    uuid: string;
    owner?: string;
    
    name: string;
    description?: string;

    members: string[];
    players?: Player[];

    tabletop?: Tabletop;
}
