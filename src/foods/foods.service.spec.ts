import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Food } from './entity/food.entity';
import { FoodRepository } from './entity/food.repository';
import { FoodsService } from './foods.service';

describe('FoodsService', () => {
  let service: FoodsService;
  let repository: FoodRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FoodsService,
        FoodRepository,
        {
          provide: getModelToken(Food.name),
          useFactory: () => ({}),
        },
      ],
    }).compile();

    service = module.get<FoodsService>(FoodsService);
    repository = module.get<FoodRepository>(FoodRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of foods', async () => {
    try {
      await service.getFoods();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe('Fail to load foods');
    }
  });

  it('should return an array of foods', async () => {
    jest
      .spyOn(repository, 'findAll')
      .mockImplementation(() => Promise.resolve([]));

    expect(await service.getFoods()).toBeInstanceOf(Array);
  });
});
