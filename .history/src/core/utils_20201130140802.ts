

export function cleanObject(obj) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || isNaN(obj[propName])) {
            delete obj[propName];
        }
    }

    return obj;
}