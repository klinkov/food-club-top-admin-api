
export interface IRequestResult<T> {
    toClass: (entity) => T[],
    toPlain: () => object
}