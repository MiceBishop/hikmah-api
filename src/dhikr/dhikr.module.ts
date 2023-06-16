import { Module } from '@nestjs/common';
import { DhikrService } from './dhikr.service';
import { DhikrController } from './dhikr.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DhikrSchema } from './schemas/dhikr.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dhikr', schema: DhikrSchema }]),
  ],
  controllers: [DhikrController],
  providers: [DhikrService],
})
export class DhikrModule {}
