import { Test, TestingModule } from '@nestjs/testing';
import { FoodsService } from './foods.service';

describe('FoodsService', () => {
  let service: FoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodsService],
    }).compile();

    service = module.get<FoodsService>(FoodsService);
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
    expect(await service.getFoods()).toBeInstanceOf(Array);
  });
});
