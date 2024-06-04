import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { PrismaModule } from '../../db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DishesService],
  controllers: [DishesController]
})
export class DishesModule {}
