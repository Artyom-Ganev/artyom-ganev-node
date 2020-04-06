import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CAREER_MODEL } from '../const';
import { CreateCareerDto } from '../dto/create-career.dto';
import { Career } from '../model/career.model';

@Injectable()
export class CareerService {
  constructor(@Inject(CAREER_MODEL) private readonly careerModel: Model<Career>) {
  }

  async create(dto: CreateCareerDto): Promise<Career> {
    const record = new this.careerModel(dto);
    return record.save();
  }

  async getAll() {
    return await this.careerModel.find({}).exec();
  }

  async getById(id: string) {
    let record;
    try {
      record = await this.careerModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find career record.');
    }
    if (!record) {
      throw new NotFoundException('Could not find career record.');
    }
    return record;
  }
}
