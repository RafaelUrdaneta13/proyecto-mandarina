import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productService: CrudService) {


   }

   public products= [];

   public product= ''; 

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      console.log('PRODUCTS', products);
      this.products = products;

    })
   
  }


  }


