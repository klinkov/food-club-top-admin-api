

export function cleanObject(obj) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || typeof obj[propName] == 'number' && isNaN(obj[propName])) {
            delete obj[propName];
        }
    }
    return obj;
}