import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DhikrModule } from './dhikr/dhikr.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WirdModule } from './wird/wird.module';
import { TalibeModule } from './talibe/talibe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    DhikrModule,
    WirdModule,
    TalibeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
