import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let provider: ReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewService],
    }).compile();

    provider = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
