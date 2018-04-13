import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  data: User[];
  current_user: User;
  crud_operation = { is_new: false, is_visible: false };
  query: string = '';
	
  constructor(private service: UserService) { }

  ngOnInit() {
	this.service.read(this.query).subscribe(res => {
	    this.data = res.json();
	    this.current_user = new User();
    });
  }

  new() {
    this.current_user = new User();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_user = row;
  }

  delete(id) {
    this.service.delete(id).subscribe(res => {
      this.crud_operation.is_new = false;
      this.ngOnInit();
    });
  }

  save() {
    if (this.crud_operation.is_new) {
      this.service.insert(this.current_user).subscribe(res => {
        this.current_user = new User();
        this.crud_operation.is_visible = false;
        this.ngOnInit();
      });
      return;
    }
    this.service.update(this.current_user).subscribe(res => {
      this.current_user = new User();
      this.crud_operation.is_visible = false;
      this.ngOnInit();
    });
  }
}
