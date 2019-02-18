import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  Productos: any [] = [];

  constructor(
  private ruta: ActivatedRoute,
  private _servicio: ProductosService
  ) { 
  this.ruta.params.subscribe(params=>{
  console.log(params['id'])
  this.Productos= _servicio.obtenerDetalles(params['id']);

  })

  }

  ngOnInit() {
  }

}
