import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const DhikrSchema = SchemaFactory.createForClass(Dhikr);
