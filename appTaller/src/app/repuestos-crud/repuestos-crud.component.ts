import { Component, OnInit } from '@angular/core';
import { Repuesto } from '../repuesto';
import { RepuestoService } from '../repuesto.service';

@Component({
  selector: 'app-repuestos-crud',
  templateUrl: './repuestos-crud.component.html',
  styleUrls: ['./repuestos-crud.component.css']
})
export class RepuestosCrudComponent implements OnInit {

  data: Repuesto[];
  current_repuesto: Repuesto;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: RepuestoService) { }

  ngOnInit() {
  	this.service.read(this.query).subscribe(res => {
   	  this.data = res.json();
 	    this.current_repuesto = new Repuesto();
    });
  }
  
  new() {
    this.current_repuesto = new Repuesto();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_repuesto = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_repuesto).subscribe(res => {
        this.current_repuesto = new Repuesto();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_repuesto).subscribe(res => {
      this.current_repuesto = new Repuesto();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }
}