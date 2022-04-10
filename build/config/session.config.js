"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'userId',
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    // store: sessionStore,
    cookie: {
        secure: false,
        maxAge: 60 * 60 * 24,
        httpOnly: false,
    },
};
