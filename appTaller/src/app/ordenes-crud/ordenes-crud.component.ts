import { Component, OnInit } from '@angular/core';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-ordenes-crud',
  templateUrl: './ordenes-crud.component.html',
  styleUrls: ['./ordenes-crud.component.css']
})
export class OrdenesCrudComponent implements OnInit {

  data: Orden[];
  current_orden: Orden;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: OrdenService) { }

  ngOnInit() {
  	this.service.read(this.query).subscribe(res => {
      this.data = res.json();
      this.current_orden = new Orden();
    });
  }

  new() {
    this.current_orden = new Orden();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_orden = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_orden).subscribe(res => {
        this.current_orden = new Orden();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_orden).subscribe(res => {
      this.current_orden = new Orden();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }
}
