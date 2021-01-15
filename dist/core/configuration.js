"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.default = () => ({
    REDIS: {
        url: process.env.REDIS_URL,
        name: process.env.REDIS_NAME
    },
    MONGO_URL: 'mongodb://localhost/food-club',
    POSTGRES: {
        "type": "postgres",
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "entities": [path.join(__dirname, "../**/*.entity{.ts,.js}"), path.join(__dirname, "../**/**/*.entity{.ts,.js}")],
        "synchronize": true,
        "keepConnectionAlive": true
    },
});
//# sourceMappingURL=configuration.js.map