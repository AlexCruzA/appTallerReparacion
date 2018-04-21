import { Component, OnInit } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boleta-detail',
  templateUrl: './boleta-detail.component.html',
  styleUrls: ['./boleta-detail.component.css']
})
export class BoletaDetailComponent implements OnInit {

  boleta: Boleta;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: BoletaService) { }

  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
      this.service.findById(params['id']).subscribe(res => {
        this.boleta = res.json();
      });
    });
  }
}
