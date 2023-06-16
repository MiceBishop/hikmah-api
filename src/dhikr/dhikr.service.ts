import { Injectable } from '@nestjs/common';
import { CreateDhikrDto } from './dto/create-dhikr.dto';
import { UpdateDhikrDto } from './dto/update-dhikr.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dhikr } from './schemas/dhikr.schema';
import { Model } from 'mongoose';

@Injectable()
export class DhikrService {
  constructor(
    @InjectModel(Dhikr.name)
    private readonly dhikrModel: Model<Dhikr>,
  ) {}

  create(createDhikrDto: CreateDhikrDto) {
    const dhikr = this.dhikrModel.create(createDhikrDto);
    return dhikr;
  }

  findAll() {
    const dhikrs = this.dhikrModel.find();
    return dhikrs;
  }

  findOne(id: string) {
    const dhikr = this.dhikrModel.findOne({ _id: id });
    return dhikr;
  }

  update(id: string, updateDhikrDto: UpdateDhikrDto) {
    const dhikr = this.dhikrModel.updateOne({ _id: id }, updateDhikrDto);
    return dhikr;
  }

  remove(id: string) {
    const dhikr = this.dhikrModel.findByIdAndRemove({ _id: id });
    return dhikr;
  }
}
