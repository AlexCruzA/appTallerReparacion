import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones-crud',
  templateUrl: './phones-crud.component.html',
  styleUrls: ['./phones-crud.component.css']
})
export class PhonesCrudComponent implements OnInit {

  data: Phone[];
  current_phone: Phone;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';

  constructor(private service: PhoneService) { }

  ngOnInit() {
    this.service.read(this.query).subscribe(res => {
      this.data = res.json();
      this.current_phone = new Phone();
    });
  }

  new() {
    this.current_phone = new Phone();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_phone = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_phone).subscribe(res => {
        this.current_phone = new Phone();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_phone).subscribe(res => {
      this.current_phone = new Phone();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }
}
