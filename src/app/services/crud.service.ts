import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(private afs: AngularFirestore) {
    this.productCollection = afs.collection<Producto>('products');
    this.products = this.productCollection.valueChanges();

   }


  private productCollection: AngularFirestoreCollection<Producto>;
  private products: Observable<Producto[]>;
  getProducts(){
    return this.products = this.productCollection.snapshotChanges()
    .pipe(map(changes=>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as Producto;
        data.$key = action.payload.doc.id;
        return data;
      })

    }));
  }

  insertProduct(product: Producto){
  }

  updateProduct(product: Producto){
  
  }

  deleteProduct($key: string){
  
  }


}
