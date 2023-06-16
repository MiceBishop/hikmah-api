import { PartialType } from '@nestjs/swagger';
import { CreateDhikrDto } from './create-dhikr.dto';

export class UpdateDhikrDto extends PartialType(CreateDhikrDto) {}
