import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DhikrDistrbution } from 'src/dhikr/schemas/dhikr-distribution.schema';
import { Talibe } from 'src/talibe/schemas/talibe.schema';
import { DhikrDistrbutionType } from './wird.schema';

@Schema({
  _id: false,
})
export class WirdDistribution {
  @Prop({ type: Types.ObjectId, required: true, ref: Talibe.name })
  talibe: string;

  @Prop({
    type: DhikrDistrbutionType,
    _id: false,
  })
  dhikrs: DhikrDistrbution[];
}

export const WirdDistributionSchema =
  SchemaFactory.createForClass(WirdDistribution);
