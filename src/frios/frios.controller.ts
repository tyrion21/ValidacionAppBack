import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { FriosService } from './frios.service';
import { CreateFrioDto } from './dto/create-frio.dto';
import { UpdateFrioDto } from './dto/update-frio.dto';
import { Response } from 'express';

@Controller('frios')
export class FriosController {
  constructor(private readonly friosService: FriosService) {}

  // @Post()
  // create(@Body() createFrioDto: CreateFrioDto) {
  //   return this.friosService.create(createFrioDto);
  // }

  // // @Get()
  // // findAll() {
  // //   return this.friosService.findAll();
  // // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.friosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFrioDto: UpdateFrioDto) {
  //   return this.friosService.update(+id, updateFrioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.friosService.remove(+id);
  // }

  @Get()
  async getFrios(@Res() res: Response) {
    try {
      const temporada = '8';
      const frios = await this.friosService.getFrios(temporada);
      return res.status(HttpStatus.OK).json(frios);
    } catch (error) {
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
      });
    }
  }
}