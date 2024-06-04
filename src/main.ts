import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  const config = new DocumentBuilder()
    .setTitle('Documentation of Ifood API')
    .setDescription('The documentation of the Ifood API.')
    .setVersion('1.0')
    .addTag('Ifood')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
