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
  @Prop()
  name: string;

  @Prop()
  transcription: string;

  @Prop()
  note: string;

  @Prop()
  status: DhikrStatus;
}

export const DhikrSchema = SchemaFactory.createForClass(Dhikr);
