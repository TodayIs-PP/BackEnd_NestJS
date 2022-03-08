import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/todayis'), FoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
