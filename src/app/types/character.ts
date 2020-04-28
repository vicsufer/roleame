import { Ability } from './ability'

export abstract class Character {
    id: string;
    name: string;
    class?: string;
    background?: string;
    portrait?: string;

    agility: number;
	hitPoints: number;
	fellowship: number;
	strength: number;
	wisdom: number;

    abilities: Ability[]
}

export abstract class CharacterUpdatable extends Character{
    id: string;
}