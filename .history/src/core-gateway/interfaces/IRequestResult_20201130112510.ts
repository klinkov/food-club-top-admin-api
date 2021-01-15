
export interface IRequestResult<R> {
    toClass: (entity) => R,
    toPlain: () => object
}