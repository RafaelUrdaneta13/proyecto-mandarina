import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  Productos:any[]=[
    {nombre: 'Mueble',
    precio: '100$',
    apreciacion:'******',
    categoria:'Sala de Estar',
    detalles:'Mueble de madera pulida tallada a mano',
    disponibles: 10,
    cat:1

    },
    {nombre: 'Silla',
    precio: '80$',
    apreciacion:'******',
    categoria:'Balcon',
    detalles:'Silla de diseñador con estampado',
    disponibles: 20,
    cat:2
    },
    {nombre: 'Lampara',
    precio: '20$',
    apreciacion:'******',
    categoria:'Dormitorio',
    detalles:'Lampara de lava psicodelica',
    disponibles: 15,
    cat:3
    },
    {nombre: 'TV',
    precio: '100$',
    apreciacion:'******',
    categoria:'Dormitorio',
    detalles:'TV de plasma marca Samsung de 40 pulgadas',
    disponibles: 15,
    cat:4
    }
  ]

  constructor() { }
  
  obtenerProducto(){
  return this.Productos;
  }

  obtenerDetalles(i){
  return this.Productos[i];
  }

}
