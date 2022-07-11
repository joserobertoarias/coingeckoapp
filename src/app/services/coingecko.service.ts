import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  apiUrl = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }


  getAllCoins(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiUrl + '/list');
  }

  getInfoCoin(coinId: string): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl + '/' + coinId );
  }


}

