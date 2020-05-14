import { Player } from './player';
import { GameCharacter } from './gameCharacter';
export class Game {
    id: string;
    uuid: string;
    owner?: string;
    
    name: string;
    description?: string;

    members: string[];
    players?: Player[];
    gameCharacters?: GameCharacter[];

    messages: string[];
    //journal: string[];
}
