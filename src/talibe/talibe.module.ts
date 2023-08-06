import { Module } from '@nestjs/common';
import { TalibeService } from './talibe.service';
import { TalibeController } from './talibe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TalibeSchema } from './schemas/talibe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Talibe', schema: TalibeSchema }]),
  ],
  controllers: [TalibeController],
  providers: [TalibeService],
})
export class TalibeModule {}
