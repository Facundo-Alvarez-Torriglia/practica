import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('LF')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/canciones')
  getTracks(): string[] {
    return this.appService.getTracks();
  }

  @Post()
  insertTrack(@Body('cancion') nombre: string, @Body('anio') anio: string) {
    this.appService.insertTrack(nombre, anio);
  }

  @Put()
  editTrack(
    @Body('cancion') nombreNuevaCancion: string,
    @Body('anio') nuevoAnio: string,
  ) {
    this.appService.editTrack(nombreNuevaCancion, nuevoAnio);
  }

  @Delete()
  deleteTrack(): void {
    this.appService.deleteTrack();
  }
}
