import { Component, Input, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Account} from '../account.model';
import {Datelist} from '../datelist.model';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})

export class AccountingComponent implements OnInit{

tool:string;
  @Input() datelist : Datelist = {'date' : ''};
  account : Account = {'bazar': '' , 'client' : '','total': 0 , 'totalakd' : 0 , 'totalpanu' : 0 ,'valan' : 0,'commission' : 0,'final': 0,'date': ''}
  client : string;
  bazar : string;
  dropdown: string;
  datedata : any;
  clientaccount: any;
  clientdata : any;
  clients_data :any;
  datesel = document.getElementById("date");
  
  constructor(private httpClient: HttpClient) { 

    this.httpClient.get('http://127.0.0.1:5002/getdatelist').subscribe(data => {
    this.datedata= data as JSON;
    this.dropdown = this.datedata[0];


    })

    this.httpClient.get('http://127.0.0.1:5002/clients').subscribe(data =>{ 
      this.clients_data = data as JSON;

  })
   

  }



  ngOnInit(): void {

  } 
    
  onOptionsSelected(value:string){
    //this.dropdown = value;
}

getclientdata(){
 
  console.log(this.dropdown)
  this.httpClient.get('http://127.0.0.1:5002/getclientaccount/'+this.client+'/'+this.dropdown).subscribe(data => {
    this.clientaccount= data as JSON;
  

    })
  

}
getbazardata(){
  this.httpClient.get('http://127.0.0.1:5002/getbazaraccount/'+this.bazar+'/'+this.dropdown).subscribe(data => {
    this.clientaccount= data as JSON;
    
  

    })


    
}

getclientday(){

  

 
  for(let row1 of this.clients_data)
  {
    let account : Account = {'bazar': '' , 'client' : '','total': 0 , 'totalakd' : 0 , 'totalpanu' : 0 ,'valan' : 0,'final': 0,'date': '','commission' : 0}
    account.client = row1['client_id']
    this.httpClient.get('http://127.0.0.1:5002/getclientaccount/'+row1['client_id']+'/'+this.dropdown).subscribe(data => {
      this.clientdata= data as JSON;

      for(let row of this.clientdata)
      {
        account.final = +this.clientdata.final + +account.final;
        account.total = +account.total + +this.clientdata.total;
        account.totalpanu = +account.totalpanu + +this.clientdata.totalpanu;
        account.valan = +account.valan + +this.clientdata.valan;
        account.commission = +account.commission + +this.clientdata.commission;
        account.totalakd = +account.totalakd + +this.clientdata.totalakd;
      }
      this.clientaccount.push(account);
  
      })
  }

  

    
}
getclientoverall(){

  


  for(let row1 of this.clients_data)
  {

    let account : Account = {'bazar': '' , 'client' : '','total': 0 , 'totalakd' : 0 , 'totalpanu' : 0 ,'valan' : 0,'final': 0,'date': '','commission' : 0}
    account.client = row1['client_id']
    this.httpClient.get('http://127.0.0.1:5002/getclientoverall/'+row1['client_id']).subscribe(data => {
      this.clientdata= data as JSON;

      for(let row of this.clientdata)
      {
        account.final = +this.clientdata.final + +account.final;
        account.total = +account.total + +this.clientdata.total;
        account.totalpanu = +account.totalpanu + +this.clientdata.totalpanu;
        account.valan = +account.valan + +this.clientdata.valan;
        account.totalakd = +account.totalakd + +this.clientdata.totalakd;
        account.commission = +account.commission + +this.clientdata.commission;
      }
      this.clientaccount.push(account);
  
      })
  }


    
}


  

}
