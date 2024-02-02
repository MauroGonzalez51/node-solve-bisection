export const randomValueInRange = ({
    minRange,
    maxRange,
}: {
    minRange: number;
    maxRange: number;
}): number => {
    return Math.random() * (maxRange - minRange) + minRange;
};

export default randomValueInRange;
