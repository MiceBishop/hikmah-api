import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Dhikr } from './dhikr.schema';

@Schema({
  _id: false,
})
export class DhikrDistrbution {
  @Prop({ type: Types.ObjectId, ref: Dhikr.name, required: true })
  dhikr: Types.ObjectId;

  @Prop({ type: Number, required: true })
  count: number;
}

export const DhikrDistrbutionSchema =
  SchemaFactory.createForClass(DhikrDistrbution);
