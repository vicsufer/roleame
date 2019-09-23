import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {
  transform(input: any, ...args: any[]): any {
    return Md5.hashStr(input);
  }
}
