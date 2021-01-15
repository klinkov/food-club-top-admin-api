

export function cleanObject(obj) {
    for (var propName in obj) {
        console.log(obj[propName])
        if (obj[propName] === null || obj[propName] === undefined || isNaN(obj[propName])) {
            delete obj[propName];
        }
    }
    return obj;
}