import { Injectable } from '@angular/core'

@Injectable ()

export class EnemigosService {

  private enemigos: Enemigo[] = [
    {
      img: 'assets/img/Ronan el acusador.png',
      titulo: 'Ronan el Acusador',
      descripcion: 'buscó acabar con toda la vida en Xandar después de que el Imperio Kree hiciera un pacto de paz con ellos. Tenía sentido considerando que este señor de la guerra genocida trató de borrar a todos los Skrulls de la existencia, y lo habría logrado si no hubiera sido por la Capitana Marvel',
      year: 'Agosto de 1969',
      casa: 'MARVEL'
    },
    {
      img: 'assets/img/El Mandarín.jpg',
      titulo: 'Trevor Slattery ("El Mandarín")',
      descripcion: 'Infundiendo miedo en los corazones de los ciudadanos estadounidenses y haciendo que Tony Stark mirara directamente a una cámara para desafiarlo a una pelea final. La última vez que se vio a este actor problemático estaba siendo sacado de prisión por el VERDADERO Mandarín...',
      year: 'Febrero de 1964',
      casa: 'MARVEL'
    },
    {
      img: 'assets/img/Ultron.jpg',
      titulo: 'Ultron',
      descripcion: 'Después de que la Batalla de Nueva York, Tony Stark se sintió imbuido de un impulso loco por proteger el mundo. Su plan, sin embargo, se descarriló fatalmente cuando los poderes de Wanda Maximoff ayudaron a dar a luz a Ultron, una IA loca de "mantenimiento de la paz" programa, alojada en una armadura de vibranium. Mantenía la vieja y simpática filosofía de "el único ser humano bueno es un ser humano muerto".',
      year: 'Julio de 1963',
      casa: 'MARVEL'
    },
    {
      img: 'assets/img/Dos Caras.jpg',
      titulo: 'Dos Caras',
      descripcion: 'Su conocimiento profundo de la ley (fue fiscal del distrito antes que criminal) lo convierte en un rival especialmente dotado. La dualidad humana hecha personaje de tebeo. Dos Caras es Jekyll y Hyde todo en uno, por lo que siempre deja en manos del azar (es decir, de su moneda favorita) el camino que debe tomar en cada ocasión.',
      year: 'Agosto de 1942',
      casa: 'DC'
    },
    {
      img: 'assets/img/EL PINGÜINO.jpg',
      titulo: 'El Pingüino',
      descripcion: 'Tenía una mente maestra para el crimen y una colección de paraguas llenos de trampas. En ocasiones, gusta de poner cohetes en la espalda de pingüinos reales. Es el auténtico gentleman del crimen en Gotham City, un tipo siempre trajeado al estilo más vieja escuela que se comporta como un capo mafioso',
      year: 'Diciembre de 1941',
      casa: 'DC'
    },
    {
      img: 'assets/img/Omni-Man.png',
      titulo: 'Omni-Man',
      descripcion: 'Omni-Man es el padre de Invencible y un miembro de la raza Viltrumita, una especie humanoide de origen extraterrestre que posee fuerza sobrehumana, supervelocidad, inmortalidad virtual y vuelo. Como es habitual en los hombres viltrumitas, Omni-Man luce un gran bigote.',
      year: 'Enero de 2003',
      casa: 'IMAGE'
    },
    {
      img: 'assets/img/Billy Kincaid.jpg',
      titulo: 'Billy Kincaid',
      descripcion: 'Es un supervillano, asesino en serie de niños, sus poderes Como fantasma: posesión, poder de sugestión, aprovechamiento de las almas.',
      year: 'Octubre de 1992', 
      casa: 'IMAGE'
    }
  ];

  constructor(){
    console.log('servicio listo');
  }

  getEnemigos(): any[]{
    return this.enemigos;
  }

  getEnemigo(idx: number): Enemigo{
    return this.enemigos [idx];
  }

  buscarEnemigos(termino: string){
    let enemigosArr: Enemigo[] = [];

    termino = termino.toLowerCase();

    for(let i = 0; i < this.enemigos.length; i++){
      let enemigo = this.enemigos[i];
      let nombre = enemigo.titulo.toLowerCase();

      if(nombre.indexOf(termino) >= 0){
        enemigo.idx = i;
        enemigosArr.push(enemigo)
      }
    }
    return enemigosArr;
  }

}

export interface Enemigo{
  img: string,
  titulo: string,
  descripcion: string,
  year: string,
  idx?: number,
  casa: string
}