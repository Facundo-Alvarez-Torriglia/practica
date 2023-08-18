import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTracks(): string[] {
    try {
      const listadoDeCanciones: string = fs.readFileSync(
        'canciones.txt',
        'utf8',
      );
      const arregloDeCanciones: string[] = listadoDeCanciones.split('\n');
      return arregloDeCanciones;
    } catch (error) {
      throw new Error('Error al obtener el listado de canciones');
    }
  }

  insertTrack(pTrack: string, pAnio: string): void {
    try {
      fs.appendFileSync('canciones.txt', '\n' + pTrack + ' ' + pAnio);
    } catch (error) {
      throw new Error('Error al insertar la canción');
    }
  }

  editTrack(nuevoTrack, nuevoAnio): void {
    const datos = nuevoTrack + ' ' + nuevoAnio;
    fs.writeFileSync('canciones.txt', datos);
  }

  deleteTrack(): void {
    fs.writeFileSync('canciones.txt', '');
  }
}
