import { PlayerCharacter } from 'app/types/playerCharacter';
export class TabletopCharacter {

    id?: string
    tabletopID: string;
    gameOwnerID: string
    playerID: string
    characterID: string
    
    character?: PlayerCharacter

    currentHealth: number
    location: {
        x: number
        y: number
    }
}

