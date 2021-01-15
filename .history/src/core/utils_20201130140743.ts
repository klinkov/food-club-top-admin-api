

export function cleanObject(obj) {
    for (var propName in obj) {
        if (!obj[propName]) {
            delete obj[propName];
        }
    }

    return obj;
}