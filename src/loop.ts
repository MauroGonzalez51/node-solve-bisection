import { Data } from "./lib/definitions";
import { MINIMUM_ERROR_PERMITED } from "./lib/constants";
import { evalFunction } from "./utils/evalFunction";

export const loop = ({ a, b }: Data): Data => {
    let data: Data = {
        a,
        b,
        x: 0,
        eval: {
            a: evalFunction({ value: a }),
            b: evalFunction({ value: b }),
            x: 0,
        },
        currentError: Infinity,
        sign: {
            a: 0,
            b: 0,
            x: 0,
        },
    };

    do {
        data.sign.a = Math.sign(data.eval.a);
        data.sign.b = Math.sign(data.eval.b);

        data.x = (data.a + data.b) / 2;

        // data.x = data.a - ((data.eval.a * (data.b - data.a)) / (data.eval.b - data.eval.a));

        data.eval.x = evalFunction({ value: data.x });
        data.currentError = Math.abs(data.b - data.a) / 2;

        data.sign.x = Math.sign(data.eval.x);

        if (data.sign.x === data.sign.a) {
            data.a = data.x;
            data.eval.a = data.eval.x;
        }

        if (data.sign.x === data.sign.b) {
            data.b = data.x;
            data.eval.b = data.eval.x;
        }
    } while (data.currentError > MINIMUM_ERROR_PERMITED);

    return data;
};

export default loop;
