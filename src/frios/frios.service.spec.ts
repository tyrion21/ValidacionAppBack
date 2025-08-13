import { Test, TestingModule } from '@nestjs/testing';
import { FriosService } from './frios.service';

describe('FriosService', () => {
  let service: FriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriosService],
    }).compile();

    service = module.get<FriosService>(FriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
