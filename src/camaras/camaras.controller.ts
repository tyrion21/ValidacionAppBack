import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CamarasService } from './camaras.service';
import { CreateCamaraDto } from './dto/create-camara.dto';
import { UpdateCamaraDto } from './dto/update-camara.dto';
import { Response } from 'express';

@Controller('camaras')
export class CamarasController {
  constructor(private readonly camarasService: CamarasService) {}

  // @Post()
  // create(@Body() createCamaraDto: CreateCamaraDto) {
  //   return this.camarasService.create(createCamaraDto);
  // }

  // @Get()
  // findAll() {
  //   return this.camarasService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.camarasService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCamaraDto: UpdateCamaraDto) {
  //   return this.camarasService.update(+id, updateCamaraDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.camarasService.remove(+id);
  // }
  @Get(':codFri')
  async getCamaras(@Param('codFri') codFri: string, @Res() res: Response) {
    try {
      console.log(`Received request for COD_FRI: ${codFri}`);
      const camaras = await this.camarasService.getCamaras(codFri);
      return res.status(HttpStatus.OK).json(camaras);
    } catch (error) {
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
      });
    }
  }
}
