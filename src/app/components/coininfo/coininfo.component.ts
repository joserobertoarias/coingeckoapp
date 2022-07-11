import { CoingeckoService } from './../../services/coingecko.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-coininfo',
  templateUrl: './coininfo.component.html',
  styleUrls: ['./coininfo.component.css']
})
export class CoininfoComponent implements OnInit {

  coin: any;
  platforms: any;
  
  constructor(private coingeckoService: CoingeckoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let pCoin = params['coin'];

      if (pCoin != undefined){
        this.coingeckoService.getInfoCoin(pCoin).subscribe((data) => {
          this.coin = data;
          
          this.platforms = Object.keys(data.platforms);


        })
      }
    });

  }

}
