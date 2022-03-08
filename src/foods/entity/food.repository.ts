import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FoodDocument } from './food.entity';

@Injectable()
export class FoodRepository {
  constructor(private readonly foodModel: Model<FoodDocument>) {}

  async findAll(): Promise<FoodDocument[]> {
    return this.foodModel.find().exec();
  }

  async findOne(id: string): Promise<FoodDocument> {
    return this.foodModel.findById(id).exec();
  }

  async create(food: FoodDocument): Promise<FoodDocument> {
    return this.foodModel.create(food);
  }

  async update(id: string, food: FoodDocument): Promise<FoodDocument> {
    return this.foodModel.findByIdAndUpdate(id, food, { new: true }).exec();
  }

  async delete(id: string): Promise<FoodDocument> {
    return this.foodModel.findByIdAndDelete(id).exec();
  }
}
