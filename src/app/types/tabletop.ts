import { TabletopCharacter } from './tabletopCharacter';
import { Action } from './action';

export class Tabletop {
    id?: string;
    gameOwnerID: string;
    
    width: number;
    height: number;
    
    characters?: TabletopCharacter[];
    actions?: Action[];
}
