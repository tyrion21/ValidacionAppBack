import { Test, TestingModule } from '@nestjs/testing';
import { FriosController } from './frios.controller';
import { FriosService } from './frios.service';

describe('FriosController', () => {
  let controller: FriosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriosController],
      providers: [FriosService],
    }).compile();

    controller = module.get<FriosController>(FriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
