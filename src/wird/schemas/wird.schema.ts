import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { DhikrDistrbution } from 'src/dhikr/schemas/dhikr-distribution.schema';
import { Dhikr } from 'src/dhikr/schemas/dhikr.schema';
import { Talibe } from 'src/talibe/schemas/talibe.schema';
import { WirdDistribution } from './wird-distribution.schema';

export const WirdDistributionType = {
  type: {
    talibe: { type: Types.ObjectId, ref: Talibe.name },
    dhikrs: {
      type: [
        { dhikr: { type: Types.ObjectId, ref: Dhikr.name }, count: Number },
      ],
    },
  },
  _id: false,
};

export const DhikrDistrbutionType = {
  type: [{ dhikr: { type: Types.ObjectId, ref: Dhikr.name }, count: Number }],
  _id: false,
};

@Schema({
  timestamps: true,
})
export class Wird {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  note: string;

  @Prop(DhikrDistrbutionType)
  dhikrs: DhikrDistrbution[];

  @Prop({
    type: [{ talibe: { type: Types.ObjectId, ref: Talibe.name } }],
    _id: false,
  })
  talibes: string[];

  @Prop(WirdDistributionType)
  distribution: WirdDistribution[];

  @Prop(WirdDistributionType)
  progress: WirdDistribution[];

  @Prop({ type: Types.ObjectId, ref: Talibe.name })
  createdBy: string;

  @Prop({ type: Boolean })
  isPublic: boolean;
}

export const WirdSchema = SchemaFactory.createForClass(Wird);
