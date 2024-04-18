import { Component, OnInit } from '@angular/core';
import { CoinloreService } from '../../services/coinlore.service';
import { LineChartComponent } from '../../components/charts/line-chart.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    LineChartComponent,
    DatePipe
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
  data: any;
  coinList: any;
  columnName: any = ['Bitcoin Dominance Percentage', 'Cryptocurrencies Number', 'Last Updated', 'Market Cap ATH Date']
  columnCoin: any = ['Close', 'High', 'Low', 'Market Cap', 'Open', 'Time Close', 'Time Open', 'Volume']

  constructor(
    private coinLoreService: CoinloreService
  ) {}

  ngOnInit(): void {
    this.fetchData()
    this.fetchList()
  }

  fetchData(){
    this.coinLoreService.fetchCryptoData().subscribe((res) => {
      this.data = res;
    })
  }

  fetchList() {
    this.coinLoreService.fetchCryptoList().subscribe((res) => {
      this.coinList = res;
      console.log('ss', this.coinList)
    })
  }

}
