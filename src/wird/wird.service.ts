import { Injectable } from '@nestjs/common';
import { CreateWirdDto } from './dto/create-wird.dto';
import { UpdateWirdDto } from './dto/update-wird.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wird } from './schemas/wird.schema';
import { Model } from 'mongoose';

@Injectable()
export class WirdService {
  constructor(
    @InjectModel(Wird.name)
    private readonly wirdModel: Model<Wird>,
  ) {}

  create(createWirdDto: CreateWirdDto) {
    return this.wirdModel.create(createWirdDto);
  }

  findAll() {
    return this.wirdModel.find().populate('dhikrs.dhikr');
  }

  findOne(id: number) {
    return this.wirdModel.findOne({ _id: id });
  }

  update(id: number, updateWirdDto: UpdateWirdDto) {
    return this.wirdModel.findOneAndUpdate({ _id: id }, updateWirdDto);
  }

  remove(id: number) {
    return this.wirdModel.findByIdAndRemove({ _id: id });
  }
}
