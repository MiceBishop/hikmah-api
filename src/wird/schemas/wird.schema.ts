import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DhikrDistrbution } from 'src/dhikr/schemas/dhikr-distribution.schema';
import { Dhikr } from 'src/dhikr/schemas/dhikr.schema';

@Schema({
  timestamps: true,
})
export class Wird {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  note: string;

  @Prop({
    type: [{ dhikr: { type: Types.ObjectId, ref: Dhikr.name }, count: Number }],
    _id: false,
  })
  dhikrs: DhikrDistrbution[];
}

export const WirdSchema = SchemaFactory.createForClass(Wird);
