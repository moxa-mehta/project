import { Component, OnInit,Input } from '@angular/core';
import { Client } from '../client.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  buttonname = "";
  @Input() client: Client = {id :"",name: '',clientid:"" , akd_rate:0,dp_rate:0,tp_rate:0,sp_rate:0,pana_com:0,akd_com:0};
  serverdata = JSON;
  constructor(private httpClient: HttpClient,private router: Router,private dataRoute: ActivatedRoute) { }

  ngOnInit(): void {

     
      const cid = this.dataRoute.snapshot.params;
      const gid=cid["$oid"]
      this.client.id = gid;
      
      if(gid != undefined){
        this.httpClient.get('http://127.0.0.1:5002/getclient/'+gid)
      .subscribe(data => {this.serverdata = data as JSON;
      this.client.name = this.serverdata[0].name;
      this.client.clientid = this.serverdata[0].client_id;
      this.client.sp_rate = this.serverdata[0].sp_rate;
      this.client.tp_rate = this.serverdata[0].tp_rate;
      this.client.dp_rate = this.serverdata[0].dp_rate;
      this.client.akd_rate = this.serverdata[0].akd_rate;
      this.client.pana_com = this.serverdata[0].pana_com;
      this.client.akd_com = this.serverdata[0].akd_com;
      })
      this.buttonname = "Update";
    }
    else{
      this.buttonname = "Add";
    }
      
      
      
    
  }
  addclient(client) {
    this.client=client;
    if (this.buttonname == "Add"){
      this.httpClient.post('http://127.0.0.1:5002/addclient', client, httpOptions)
    .subscribe(data => {
      console.log('data receivesd:', data);
    }, err => {
      console.log('error from backend:', err);
    });

    }
    else{
      this.httpClient.put('http://127.0.0.1:5002/updateclient',client,httpOptions).subscribe(data =>{
        console.log('data updated')
      })
    }
   
    
  }
  back() : void {
    
     this.router.navigate(["client"]);
    
      
    }
  
}
