"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
function cleanObject(obj) {
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || typeof obj[propName] == 'number' && isNaN(obj[propName])) {
            delete obj[propName];
        }
    }
    return obj;
}
exports.cleanObject = cleanObject;
//# sourceMappingURL=utils.js.map