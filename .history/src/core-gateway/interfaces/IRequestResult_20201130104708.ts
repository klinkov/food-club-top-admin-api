
export interface IRequestResult<T> {
    toClass: (entity) => object,
    toPlain: () => object
}