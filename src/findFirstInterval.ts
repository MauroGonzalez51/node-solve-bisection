import { evalFunction } from "./utils/evalFunction";
import { randomValueInRange } from "./utils/randomValueInRange";
import { Data } from "./lib/definitions";
import { RANGE } from './lib/constants'

export const findFirstInterval = (): Data => {
    let signA: number, signB: number;
    let data: Data = { a: 0, b: 0 };

    do {
        data.a = Math.floor(randomValueInRange({ minRange: -RANGE, maxRange: RANGE }));
        data.b = Math.floor(randomValueInRange({ minRange: -RANGE, maxRange: RANGE }));

        
        signA = Math.sign(evalFunction({ value: data.a }));
        signB = Math.sign(evalFunction({ value: data.b }));

        // console.log(`Current: { a: ${data.a}, b: ${data.b} }`);
    } while (signA === signB);

    if (data.a > data.b) [data.a, data.b] = [data.b, data.a];

    return data;
};

export default findFirstInterval;
