import { findFirstInterval } from "./src/findFirstInterval";
import { Data } from "./src/lib/definitions";
import { loop } from "./src/loop";

function main() {
    const { a, b }: Data = findFirstInterval();
    console.log(loop({ a, b }));
}

main();
