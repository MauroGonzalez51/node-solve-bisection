export const evalFunction = ({ value }: { value: number }): number => {
    return Math.pow(value, 2) - 2 * value - 5;
};

export default evalFunction;