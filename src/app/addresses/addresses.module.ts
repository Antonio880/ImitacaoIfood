import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { PrismaModule } from '../../db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AddressesService],
  controllers: [AddressesController]
})
export class AddressesModule {}
