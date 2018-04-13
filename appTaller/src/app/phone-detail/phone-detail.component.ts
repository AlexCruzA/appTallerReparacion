import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  phone: Phone;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: PhoneService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.service.findById(params['id']).subscribe(res => {
        this.phone = res.json();
      });
    });
  }
}
