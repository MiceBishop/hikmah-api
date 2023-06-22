import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WirdService } from './wird.service';
import { CreateWirdDto } from './dto/create-wird.dto';
import { UpdateWirdDto } from './dto/update-wird.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Wird')
@Controller('wird')
export class WirdController {
  constructor(private readonly wirdService: WirdService) {}

  @Post()
  create(@Body() createWirdDto: CreateWirdDto) {
    return this.wirdService.create(createWirdDto);
  }

  @Get()
  findAll() {
    return this.wirdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wirdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWirdDto: UpdateWirdDto) {
    return this.wirdService.update(+id, updateWirdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wirdService.remove(+id);
  }
}
