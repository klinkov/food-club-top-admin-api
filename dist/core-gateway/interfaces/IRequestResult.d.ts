export interface IRequestResult<R> {
    toClass: (entity: any) => R;
    toClassList: (entity: any) => R[];
    toPlain: () => R;
}
