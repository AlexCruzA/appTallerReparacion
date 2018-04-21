import { Component, OnInit } from '@angular/core';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orden-detail',
  templateUrl: './orden-detail.component.html',
  styleUrls: ['./orden-detail.component.css']
})
export class OrdenDetailComponent implements OnInit {

  orden: Orden;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: OrdenService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.service.findById(params['id']).subscribe(res => {
        this.orden = res.json();
      });
    });
  }
}
