"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const ErrorMiddleware_1 = __importDefault(require("./middlewares/ErrorMiddleware"));
const logger_1 = __importDefault(require("./config/logger"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const session_config_1 = __importDefault(require("./config/session.config"));
class App {
    constructor() {
        var _a, _b;
        this.logStream = logger_1.default.logStream;
        this.logger = logger_1.default.logger;
        this.errorHandler = new ErrorMiddleware_1.default();
        this.app = (0, express_1.default)();
        this.host = (_a = process.env.APP_HOST) !== null && _a !== void 0 ? _a : '';
        this.port = (_b = process.env.APP_PORT) !== null && _b !== void 0 ? _b : '';
        this.initializeMiddleWares();
        this.initializeRoutes();
        this.initializeErrorHandlers();
        this.startApp();
    }
    initializeMiddleWares() {
        this.app.use((0, cors_1.default)({
            credentials: true,
            // allowedHeaders: 'Content-Type',
            // origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: true,
            optionsSuccessStatus: 204
        }));
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('combined', { stream: this.logStream }));
        // initialize cookie-parser to allow us access the cookies stored in the browser.
        this.app.use((0, cookie_parser_1.default)());
        // initialize express-session to allow us track the logged-in user across sessions.
        this.app.use((0, express_session_1.default)(session_config_1.default));
    }
    initializeRoutes() {
        this.app.use(`/`, (0, routes_1.default)());
    }
    initializeErrorHandlers() {
        this.app.use(this.errorHandler.appErrorHandler);
        this.app.use(this.errorHandler.genericErrorHandler);
        this.app.use(this.errorHandler.notFound);
    }
    startApp() {
        this.app.listen(this.port, () => {
            this.logger.info(`Server started at ${this.host}:${this.port}`);
        });
    }
    getApp() {
        return this.app;
    }
}
const app = new App();
exports.default = app;
//# sourceMappingURL=index.js.map