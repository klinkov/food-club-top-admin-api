
export interface IRequestResult<T> {
    toClass: (entity: T) => T,
    toPlain: () => object
}