import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //ວິທີໃຫ້ເຂົ້າເຖີງ rout ຜ່ານ pate
  app.setGlobalPrefix('api/v1')
  await app.listen(3000);
}
bootstrap();
