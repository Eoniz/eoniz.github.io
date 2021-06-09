export const limitArray = <T>(arr: Array<T>, maxSize: number): Array<T> => {
    const next = [...arr];
    if (next.length > maxSize) {
        next.splice(
            0,
            next.length - maxSize
        )
    }

    return next;
}
