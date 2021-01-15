
export interface IRequestResult<R> {
    toClass: (entity) => R | R[],
    toPlain: () => object
}