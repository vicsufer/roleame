import { Tabletop } from './tabletop';
import { Player } from './player';

export class DiceRoller {

    static simpleRoll( sides: number ): number {
        return Math.floor(Math.random() * sides) + 1;
    }

    static composedRoll( sides: number, repeat: number): {total: number, rolls: number[]} {
        var total = 0;
        var rolls = [];
        for(var i=0; i<repeat; i++){
            var roll = this.simpleRoll(sides)
            total += roll
            rolls.push(roll)
        }
        return {total, rolls};
    }
    
}
