import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { PrismaModule } from './db/prisma.module';
import { RestaurantsModule } from './app/restaurants/restaurants.module';
import { DishesModule } from './app/dishes/dishes.module';
import { OrdersModule } from './app/orders/orders.module';
import { OrderItemsModule } from './app/order-items/order-items.module';
import { DeliveryPersonsModule } from './app/delivery-persons/delivery-persons.module';
import { AddressesModule } from './app/addresses/addresses.module';
import { PaymentsModule } from './app/payments/payments.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, RestaurantsModule, DishesModule, OrdersModule, OrderItemsModule, DeliveryPersonsModule, AddressesModule, PaymentsModule, AuthModule],
})
export class AppModule {}