import { Expect } from './expect';
import * as Utils from './utils';

console.log(Expect(Utils.splitText('mike')).toHaveLengthOf(4));
console.log(Expect(Utils.createElement('p').tagName.toLowerCase()).toBe('p'));