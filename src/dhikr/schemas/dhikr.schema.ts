import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Talibe } from 'src/talibe/schemas/talibe.schema';

enum DhikrStatus {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived',
}

@Schema({
  timestamps: true,
})
export class Dhikr {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  transcription: string;

  @Prop({ type: String })
  note: string;

  @Prop({ type: String })
  status: DhikrStatus;

  @Prop({ type: Types.ObjectId, ref: Talibe.name })
  createdBy: string;
}

export const DhikrSchema = SchemaFactory.createForClass(Dhikr);
