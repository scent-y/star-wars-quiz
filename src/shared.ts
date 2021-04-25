export const getRandom = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const shuffleArray = <T> (array: T[]):T[] => {
    return array.sort(() => Math.random() - 0.5);
}
