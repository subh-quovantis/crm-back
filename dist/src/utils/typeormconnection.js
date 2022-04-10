"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConnection = void 0;
const typeorm_1 = require("typeorm");
const typeOrmConnection = async () => {
    const connectionOptions = await (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV);
    return (0, typeorm_1.createConnection)({ ...connectionOptions, name: "default" });
};
exports.typeOrmConnection = typeOrmConnection;
//# sourceMappingURL=typeormconnection.js.map