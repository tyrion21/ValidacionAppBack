"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path = require("path");
async function bootstrap() {
    const httpApp = await core_1.NestFactory.create(app_module_1.AppModule);
    httpApp.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    await httpApp.listen(3000, '192.168.7.25');
    console.log('Servidor HTTP de testing corriendo en http://192.168.7.25:3000');
    const httpsOptions = {
        key: fs.readFileSync(path.join(__dirname, '../secrets/192.168.7.25-key.pem')),
        cert: fs.readFileSync(path.join(__dirname, '../secrets/192.168.7.25.pem')),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    await app.listen(4000, '192.168.7.25');
    console.log('Servidor HTTPS corriendo en https://192.168.7.25:4000');
}
bootstrap();
//# sourceMappingURL=main.js.map