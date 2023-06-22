import { PartialType } from '@nestjs/swagger';
import { CreateWirdDto } from './create-wird.dto';

export class UpdateWirdDto extends PartialType(CreateWirdDto) {}
