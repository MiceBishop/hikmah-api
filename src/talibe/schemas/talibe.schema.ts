import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Talibe {
  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  registrationNumber: string;
}

export const TalibeSchema = SchemaFactory.createForClass(Talibe);
