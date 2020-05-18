import { Tabletop } from './tabletop';
import { Player } from './player';

export class DiceRoller {

    static simpleRoll( sides: number ): number {
        return Math.floor(Math.random() * sides) + 1;
    }

    static composedRoll( sides: number, repeat: number): number {
        var total;
        for(var i=0; i<=repeat; i++){
            total += this.simpleRoll(sides)
        }
        return total;
    }
    
}
