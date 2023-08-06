import { Injectable } from '@nestjs/common';
import { CreateTalibeDto } from './dto/create-talibe.dto';
import { UpdateTalibeDto } from './dto/update-talibe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Talibe } from './schemas/talibe.schema';
import { Model } from 'mongoose';

@Injectable()
export class TalibeService {
  constructor(
    @InjectModel(Talibe.name)
    private readonly talibeModel: Model<Talibe>,
  ) {}

  create(createTalibeDto: CreateTalibeDto) {
    return this.talibeModel.create(createTalibeDto);
  }

  findAll() {
    return this.talibeModel.find();
  }

  findOne(id: string) {
    return this.talibeModel.findOne({ _id: id });
  }

  update(id: string, updateTalibeDto: UpdateTalibeDto) {
    return this.talibeModel.updateOne({ _id: id }, updateTalibeDto);
  }

  remove(id: string) {
    return this.talibeModel.findByIdAndRemove({ _id: id });
  }
}
