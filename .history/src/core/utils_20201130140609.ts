

export function cleanObject(obj) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] == NaN) {
            delete obj[propName];
        }
    }
}