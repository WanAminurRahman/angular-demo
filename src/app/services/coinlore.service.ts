import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinloreService {
  apiUrl: any = 'https://api.coinpaprika.com/v1/'

  constructor(private http: HttpClient) { }

  fetchCryptoData() {
    return this.http.get(this.apiUrl + 'global');
  }

  fetchCryptoList() {
    return this.http.get(this.apiUrl + 'coins/btc-bitcoin/ohlcv/today');
  }
}
