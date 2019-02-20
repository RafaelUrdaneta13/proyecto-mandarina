import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  

  constructor(private _servicio: CrudService) { 
  }

  private products:Producto[];

  ngOnInit() {
    this.getListProducts();
  }
getListProducts(){
  this._servicio.getProducts().subscribe( products =>{
  this.products = products;
  });
}

onDeleteBook(){
  console.log('Delete Book');
  this._servicio.deleteProduct
}
 
}
