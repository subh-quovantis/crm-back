"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'userId' !== null && 'userId' !== void 0 ? 'userId' : '',
    secret: (_a = process.env.secret) !== null && _a !== void 0 ? _a : '',
    resave: false,
    saveUninitialized: false,
    // store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: false,
    },
};
//# sourceMappingURL=session.config.js.map