import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  Productos: any [] = [];
  Categoria: number=1;

  constructor(private _servicio: ProductosService) { 

    this.Productos= _servicio.obtenerProducto();

  }

  ngOnInit() {
  }

 
}
