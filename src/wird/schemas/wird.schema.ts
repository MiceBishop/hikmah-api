import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Dhikr } from 'src/dhikr/schemas/dhikr.schema';

@Schema({
  timestamps: true,
})
export class Wird {
  @Prop()
  name: string;

  @Prop()
  note: string;

  @Prop({
    ref: Dhikr.name,
  })
  dhikrs: Types.ObjectId[];
}

export const WirdSchema = SchemaFactory.createForClass(Wird);
