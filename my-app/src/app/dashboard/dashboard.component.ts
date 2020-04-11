import { Component, OnInit, Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DASHBOARDComponent implements OnInit {

  @Input() hero: Hero = {name: '1'};
  dashboarddata : JSON
  akddata:JSON;
  serverData: JSON;
  employeeData: JSON;
  headers = ["1", "01", "2", "02", "3","03","4","04","5","05","6","06","7","07","8","08","9","09","10","010"];
  akdheaders =["Akd","Data"];
  aheaders=["akd","data"];


  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:5002/dashboard').subscribe(data => {
      this.dashboarddata = data as JSON;
      console.log(this.dashboarddata);
    })
    this.httpClient.get('http://127.0.0.1:5002/akdtable').subscribe(data => {
      this.akddata = data as JSON;
      console.log(this.akddata);
    })

  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }
  getAllEmployees(hero) {
    this.hero=hero;
    console.log('hero:', hero);
    this.httpClient.post('http://127.0.0.1:5002/employees', hero, httpOptions)
    .subscribe(data => {
      console.log('data receivesd:', data);
    }, err => {
      console.log('error from backend:', err);
    });
  }
  
}
