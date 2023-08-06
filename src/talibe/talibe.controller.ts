import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TalibeService } from './talibe.service';
import { CreateTalibeDto } from './dto/create-talibe.dto';
import { UpdateTalibeDto } from './dto/update-talibe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('talibe')
@Controller('talibe')
export class TalibeController {
  constructor(private readonly talibeService: TalibeService) {}

  @Post()
  create(@Body() createTalibeDto: CreateTalibeDto) {
    return this.talibeService.create(createTalibeDto);
  }

  @Get()
  findAll() {
    return this.talibeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talibeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalibeDto: UpdateTalibeDto) {
    return this.talibeService.update(id, updateTalibeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talibeService.remove(id);
  }
}
