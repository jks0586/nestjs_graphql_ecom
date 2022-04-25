import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
// import * as blade from 'blade';
import * as hbs from 'hbs';
import { join } from 'path';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.enableCors();
// console.log(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.engine('hbs', hbs);
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  hbs.registerPartials(join(__dirname, '..', 'views/layout'));
  app.setViewEngine('hbs');


  await app.listen(3000);
}
bootstrap();
