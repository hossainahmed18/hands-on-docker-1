import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss']
})
export class CustomerdetailComponent implements OnInit, OnDestroy {
  routerSubscription!: Subscription;
  id! :string 

  constructor(private route: ActivatedRoute ) { }

  
  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
        this.id = paramMap.params.id;
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }


}
