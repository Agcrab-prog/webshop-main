// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    
    // Beállítjuk az EJS-t mint nézetmotort
    app.setViewEngine('ejs');

    // Beállítjuk a nézetek helyét
    app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

    // A 3000-es portot használja
    await app.listen(3000);
    console.log('Application is running on: http://localhost:3000');
}

bootstrap();
