import { PartialType } from '@nestjs/swagger';
import { CreateTalibeDto } from './create-talibe.dto';

export class UpdateTalibeDto extends PartialType(CreateTalibeDto) {}
