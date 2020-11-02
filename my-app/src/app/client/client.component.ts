import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  headers=["Client id","Client Name","SP Rate","DP Rate","TP Rate","AKD Rate","Pana Com","AKD Com","Actions"]
  column =['client_id','name','sp_rate','tp_rate','dp_rate','akd_rate','pana_com','akd_com']
  clientdata : JSON
  deletedata :JSON
  

  constructor(private httpClient: HttpClient,private router: Router) { 

  }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:5002/clients').subscribe(data => {
      this.clientdata = data as JSON;
      console.log(this.clientdata);
    })
  }
  delete(id) {
    
   if (confirm("Are you sure to delete?")) {
      this.httpClient.delete('http://127.0.0.1:5002/deleteclient/'+id["$oid"], httpOptions).subscribe(data => {
        this.deletedata = data as JSON;
        console.log(this.deletedata);
      })
    } 
    
  }
  back() : void {
    
    this.router.navigate(["addclient"]);
   
     
   }
   update(id) : void {
    
    this.router.navigate(["addclient",id]);
   
     
   }
   home() : void {
    
    this.router.navigate(["/dashboard"]);
   
     
   }
 

}
