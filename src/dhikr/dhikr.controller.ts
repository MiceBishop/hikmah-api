import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DhikrService } from './dhikr.service';
import { CreateDhikrDto } from './dto/create-dhikr.dto';
import { UpdateDhikrDto } from './dto/update-dhikr.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dhikr')
@Controller('dhikr')
export class DhikrController {
  constructor(private readonly dhikrService: DhikrService) {}

  @Post()
  create(@Body() createDhikrDto: CreateDhikrDto) {
    return this.dhikrService.create(createDhikrDto);
  }

  @Get()
  findAll() {
    return this.dhikrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dhikrService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDhikrDto: UpdateDhikrDto) {
    return this.dhikrService.update(id, updateDhikrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dhikrService.remove(id);
  }
}
