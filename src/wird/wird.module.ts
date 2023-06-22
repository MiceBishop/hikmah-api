import { Module } from '@nestjs/common';
import { WirdService } from './wird.service';
import { WirdController } from './wird.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WirdSchema } from './schemas/wird.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Wird', schema: WirdSchema }])],
  controllers: [WirdController],
  providers: [WirdService],
})
export class WirdModule {}
