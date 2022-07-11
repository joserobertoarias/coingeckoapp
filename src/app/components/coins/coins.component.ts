import { CoingeckoService } from './../../services/coingecko.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: any;
  coinsCopy: any;
  platforms: any;
  constructor(private coinService: CoingeckoService) { }

  ngOnInit(): void {

    this.coinService.getAllCoins().subscribe(data => {
      this.coins = data;
      this.coinsCopy = data;
            
    })

  }


  filter(e: any){
    const search: string = e.target.value;
    this.coins = this.coinsCopy.filter(({name}: any) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
