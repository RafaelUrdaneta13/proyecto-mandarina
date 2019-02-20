import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private service:CrudService) { }

  ngOnInit() {
  }
  onSaveProduct(productForm : NgForm): void{
    //nuevo
    this.service.insertProduct(productForm.value);

    //modificar

  }
}
