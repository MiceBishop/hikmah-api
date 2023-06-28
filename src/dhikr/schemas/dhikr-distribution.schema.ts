import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Dhikr } from './dhikr.schema';

@Schema({
  timestamps: true,
  _id: false,
})
export class DhikrDistrbution {
  @Prop({
    type: Types.ObjectId,
    ref: Dhikr.name,
  })
  dhikr: Types.ObjectId;

  @Prop({
    type: Number,
  })
  count: number;
}

export const DhikrDistrbutionSchema =
  SchemaFactory.createForClass(DhikrDistrbution);
