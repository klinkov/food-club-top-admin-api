
export interface IRequestResult<R> {
    toClass: (entity) => R,
    toClassList: (entity) => R[],
    toPlain: () => object
}