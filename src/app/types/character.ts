import { Ability } from './ability'
import { AmplifyService } from 'aws-amplify-angular';

export abstract class Character {
    id: string;
    uuid: string;
    
    name: string;
    class?: string;
    background?: string;
    portrait?: string;
    portraitURL?: string;

    agility: number;
	hitPoints: number;
	fellowship: number;
	strength: number;
	wisdom: number;

    abilities: Ability[]
}
