import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero.model';
import { Database } from '../database.model';
import { Client } from '../client.model';
import { Adkdata } from '../adkdata.model';
import { History} from '../history.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DASHBOARDComponent implements OnInit {
  @Input() a1 : Adkdata = { 'akd' : '1' , 'data' : 0 };
  @Input() a2 : Adkdata = { 'akd' : '2' , 'data' : 0 };
  @Input() a3 : Adkdata = { 'akd' : '3' , 'data' : 0 };
  @Input() a4 : Adkdata = { 'akd' : '4' , 'data' : 0 };
  @Input() a5 : Adkdata = { 'akd' : '5' , 'data' : 0 };
  @Input() a6 : Adkdata = { 'akd' : '6' , 'data' : 0 };
  @Input() a7 : Adkdata = { 'akd' : '7' , 'data' : 0 };
  @Input() a8 : Adkdata = { 'akd' : '8' , 'data' : 0 };
  @Input() a9 : Adkdata = { 'akd' : '9' , 'data' : 0 };
  @Input() a0 : Adkdata = { 'akd' : '0' , 'data' : 0 };
  @Input() bazar: Hero = {'bazar_id' : '1','name': 'A'};
  @Input() r1 : Database = {  "Bazar":'1' ,   "1":'128', "01" : 0 , 
                                  "2" : '129', "02" :0,
                                  "3":'120', "03" : 0,
                                  "4":'130', "04" : 0, 
                                  "5":'140', "05" : 0,
                                  "6":'123', "06" : 0,
                                  "7":'124', "07" : 0,
                                  "8":'125', "08" : 0,
                                  "9":'126', "09" : 0,
                                  "10":'127', "010" : 0,
                                  "type" : 'S'
                                };
@Input() r2 : Database = {   "Bazar" :"1",   "1":'137', "01" : 0 , 
                                "2" : '138', "02" :0,
                                "3":'139', "03" : 0,
                                "4":'149', "04" : 0, 
                                "5":'159', "05" : 0,
                                "6":'150', "06" : 0,
                                "7":'160', "07" : 0,
                                "8":'134', "08" : 0,
                                "9":'135', "09" : 0,
                                "10":'136', "010" : 0,
                                "type" : 'S'
                              };
@Input() r3 : Database = {  'Bazar' :"1"   , "1":'146', "01" : 0 , 
                              "2" : '147', "02" :0,
                              "3":'148', "03" : 0,
                              "4":'158', "04" : 0, 
                              "5":'168', "05" : 0,
                              "6":'169', "06" : 0,
                              "7":'179', "07" : 0,
                              "8":'170', "08" : 0,
                              "9":'180', "09" : 0,
                              "10":'145', "010" : 0,
                              "type" : 'S'
                            };
@Input() r4 : Database = { 'Bazar': '1',   "1":'236', "01" : 0 , 
                            "2" : '156', "02" :0,
                            "3":'157', "03" : 0,
                            "4":'167', "04" : 0, 
                            "5":'230', "05" : 0,
                            "6":'178', "06" : 0,
                            "7":'250', "07" : 0,
                            "8":'189', "08" : 0,
                            "9":'234', "09" : 0,
                            "10":'190', "010" : 0,
                            "type" : 'S'
                          };
@Input() r5 : Database = { 'Bazar': '1',"1":'245', "01" : 0 , 
                          "2" : '237', "02" :0,
                          "3":'238', "03" : 0,
                          "4":'239', "04" : 0, 
                          "5":'249', "05" : 0,
                          "6":'240', "06" : 0,
                          "7":'269', "07" : 0,
                          "8":'260', "08" : 0,
                          "9":'270', "09" : 0,
                          "10":'235', "010" : 0,
                          "type" : 'S'
                        };

@Input() r6 : Database = { 'Bazar': '1', "1":'290', "01" : 0 , 
                        "2" : '246', "02" :0,
                        "3":'247', "03" : 0,
                        "4":'248', "04" : 0, 
                        "5":'258', "05" : 0,
                        "6":'259', "06" : 0,
                        "7":'278', "07" : 0,
                        "8":'279', "08" : 0,
                        "9":'289', "09" : 0,
                        "10":'280', "010" : 0,
                        "type" : 'S'
                      };

@Input() r7 : Database = { 'Bazar': '1',"1":'380', "01" : 0 , 
                      "2" : '345', "02" :0,
                      "3":'256', "03" : 0,
                      "4":'257', "04" : 0, 
                      "5":'267', "05" : 0,
                      "6":'268', "06" : 0,
                      "7":'340', "07" : 0,
                      "8":'350', "08" : 0,
                      "9":'360', "09" : 0,
                      "10":'370', "010" : 0,
                      "type" : 'S'
                    };
@Input() r8 : Database = { 'Bazar': '1',"1":'470', "01" : 0 , 
                    "2" : '390', "02" :0,
                    "3":'346', "03" : 0,
                    "4":'347', "04" : 0, 
                    "5":'348', "05" : 0,
                    "6":'349', "06" : 0,
                    "7":'359', "07" : 0,
                    "8":'369', "08" : 0,
                    "9":'379', "09" : 0,
                    "10":'389', "010" : 0,
                    "type" : 'S'
                  };
@Input() r9 : Database = { 'Bazar': '1',"1":'489', "01" : 0 , 
                  "2" : '480', "02" :0,
                  "3":'490', "03" : 0,
                  "4":'356', "04" : 0, 
                  "5":'357', "05" : 0,
                  "6":'358', "06" : 0,
                  "7":'368', "07" : 0,
                  "8":'378', "08" : 0,
                  "9":'450', "09" : 0,
                  "10":'460', "010" : 0,
                  "type" : 'S'
                };
@Input() r10 : Database = { 'Bazar': '1',"1":'560', "01" : 0 , 
                "2" : '570', "02" :0,
                "3":'580', "03" : 0,
                "4":'590', "04" : 0, 
                "5":'456', "05" : 0,
                "6":'367', "06" : 0,
                "7":'458', "07" : 0,
                "8":'459', "08" : 0,
                "9":'469', "09" : 0,
                "10":'479', "010" : 0,
                "type" : 'S'
              };
@Input() r11 : Database = { 'Bazar': '1', "1":'579', "01" : 0 , 
              "2" : '589', "02" :0,
              "3":'670', "03" : 0,
              "4":'680', "04" : 0, 
              "5":'690', "05" : 0,
              "6":'457', "06" : 0,
              "7":'467', "07" : 0,
              "8":'468', "08" : 0,
              "9":'478', "09" : 0,
              "10":'569', "010" : 0,
              "type" : 'S'
            };
 @Input() r12 : Database = {'Bazar': '1', "1":'678', "01" : 0 , 
            "2" : '679', "02" :0,
            "3":'689', "03" : 0,
            "4":'789', "04" : 0, 
            "5":'780', "05" : 0,
            "6":'790', "06" : 0,
            "7":'890', "07" : 0,
            "8":'567', "08" : 0,
            "9":'568', "09" : 0,
            "10":'578', "010" : 0,
            "type" : 'S'
          };
@Input() r13 : Database = { 'Bazar': '1', "1":'100', "01" : 0 , 
          "2" : '110', "02" :0,
          "3":'166', "03" : 0,
          "4":'112', "04" : 0, 
          "5":'113', "05" : 0,
          "6":'114', "06" : 0,
          "7":'115', "07" : 0,
          "8":'116', "08" : 0,
          "9":'117', "09" : 0,
          "10":'118', "010" : 0,
          "type" : 'D'
        };
@Input() r14 : Database = { 'Bazar': '1', "1":'119', "01" : 0 , 
        "2" : '200', "02" :0,
        "3":'229', "03" : 0,
        "4":'220', "04" : 0, 
        "5":'122', "05" : 0,
        "6":'277', "06" : 0,
        "7":'133', "07" : 0,
        "8":'224', "08" : 0,
        "9":'144', "09" : 0,
        "10":'226', "010" : 0,
        "type" : 'D'
      };
@Input() r15 : Database = {'Bazar': '1', "1":'155', "01" : 0 , 
      "2" : '228', "02" :0,
      "3":'300', "03" : 0,
      "4":'266', "04" : 0, 
      "5":'177', "05" : 0,
      "6":'330', "06" : 0,
      "7":'188', "07" : 0,
      "8":'233', "08" : 0,
      "9":'199', "09" : 0,
      "10":'244', "010" : 0,
      "type" : 'D'
    };
@Input() r16 : Database = {  'Bazar': '1',"1":'227', "01" : 0 , 
    "2" : '255', "02" :0,
    "3":'337', "03" : 0,
    "4":'338', "04" : 0, 
    "5":'339', "05" : 0,
    "6":'448', "06" : 0,
    "7":'223', "07" : 0,
    "8":'288', "08" : 0,
    "9":'225', "09" : 0,
    "10":'299', "010" : 0,
    "type" : 'D'
  };
  @Input() r17 : Database = { 'Bazar': '1', "1":'335', "01" : 0 , 
            "2" : '336', "02" :0,
            "3":'355', "03" : 0,
            "4":'400', "04" : 0, 
            "5":'366', "05" : 0,
            "6":'466', "06" : 0,
            "7":'377', "07" : 0,
            "8":'440', "08" : 0,
            "9":'388', "09" : 0,
            "10":'334', "010" : 0,
            "type" : 'D'
          };
@Input() r18 : Database = {  'Bazar': '1',"1":'344', "01" : 0 , 
          "2" : '499', "02" :0,
          "3":'445', "03" : 0,
          "4":'446', "04" : 0, 
          "5":'447', "05" : 0,
          "6":'556', "06" : 0,
          "7":'449', "07" : 0,
          "8":'477', "08" : 0,
          "9":'559', "09" : 0,
          "10":'488', "010" : 0,
          "type" : 'D'
        };
@Input() r19 : Database = { 'Bazar': '1',"1":'399', "01" : 0 , 
        "2" : '660', "02" :0,
        "3":'599', "03" : 0,
        "4":'455', "04" : 0, 
        "5":'500', "05" : 0,
        "6":'600', "06" : 0,
        "7":'557', "07" : 0,
        "8":'558', "08" : 0,
        "9":'577', "09" : 0,
        "10":'550', "010" : 0,
        "type" : 'D'
      };
      @Input() r20 : Database = { 'Bazar': '1', "1":'588', "01" : 0 , 
      "2" : '688', "02" :0,
      "3":'779', "03" : 0,
      "4":'699', "04" : 0, 
      "5":'799', "05" : 0,
      "6":'880', "06" : 0,
      "7":'566', "07" : 0,
      "8":'800', "08" : 0,
      "9":'667', "09" : 0,
      "10":'668', "010" : 0,
      "type" : 'D'
    };

    @Input() r21 : Database = {  'Bazar': '1',"1":'669', "01" : 0 , 
          "2" : '778', "02" :0,
          "3":'788', "03" : 0,
          "4":'770', "04" : 0, 
          "5":'889', "05" : 0,
          "6":'899', "06" : 0,
          "7":'700', "07" : 0,
          "8":'990', "08" : 0,
          "9":'900', "09" : 0,
          "10":'677', "010" : 0,
          "type" : 'D'
        };
      @Input() r22 : Database = { 'Bazar': '1',"1":'777', "01" : 0 , 
        "2" : '444', "02" :0,
        "3":'111', "03" : 0,
        "4":'888', "04" : 0, 
        "5":'555', "05" : 0,
        "6":'222', "06" : 0,
        "7":'999', "07" : 0,
        "8":'666', "08" : 0,
        "9":'333', "09" : 0,
        "10":'1000', "010" : 0,
        "type" : 'T'
      };
  @Input() history : History = {'client_id' : '' , 'number' : '' , 'bet' : 0 , 'bet_total' : 0 , 'code' : '' , 'bazar' : '' };                     
  @Input() bet : number;
  @Input() bet1 : number;
  @Input() code : string;
  @Input() number : string;
  @Input() client : Client = { 'name': '' , 'akd_com' : 0, 'akd_rate': 0, "dp_rate" : 0 , 'clientid' : '' , 'pana_com' : 0, 'id' : '', 'tp_rate' :0 , 'sp_rate' :0 }; 
  dashboarddata : any ;
  akd_limit : number = 100;
  dp_limit :number = 100;
  tp_limit : number = 100;
  sp_limit : number = 100;

  panatotal :number = 0;
  akdtotal:number = 0;
  total : number = 0;
  historydata : any;
  demo : any ;
  updatedata : JSON;
  clientdata:JSON;
  akddata:JSON;
  serverData: JSON;
  employeeData: JSON;
  head =["1","2","3","4","5","6","7","8","9","10"];
  tail =["01","02","03","04","05","06","07","08","09","010"];
  headers = ["1", "01", "2", "02", "3","03","4","04","5","05","6","06","7","07","8","08","9","09","10","010"];
  akdheaders =["Akd","Data"];
  aheaders=["akd","data"];
  historyheaders =["client_id","bet","bet_total","code","number","bazar"];



  constructor(private httpClient: HttpClient) { 
      //this.filltable(this.r1);
      // this.filltable(this.r2);
      // this.filltable(this.r3);
      //this.filltable(this.r4);
      // this.filltable(this.r5);
      // this.filltable(this.r6);
      // this.filltable(this.r7);
      // this.filltable(this.r8);
      // this.filltable(this.r9);
      // this.filltable(this.r10);
      // this.filltable(this.r11);
      // this.filltable(this.r12);
      // this.filltable(this.r13);
      // this.filltable(this.r14);
      // this.filltable(this.r15);
      // this.filltable(this.r16);
      // this.filltable(this.r17);
      // this.filltable(this.r18);
      // this.filltable(this.r19);
      // this.filltable(this.r20);
      // this.filltable(this.r21);
      // this.filltable(this.r22);


    this.httpClient.get('http://127.0.0.1:5002/history/'+this.bazar.bazar_id).subscribe(data =>{ 
      this.historydata = data as JSON;
      //this.history = this.historydata;
      console.log(this.historydata);
      
      
    })
    
    this.httpClient.get('http://127.0.0.1:5002/dashboard/'+this.bazar.bazar_id).subscribe(data => {
      this.dashboarddata = data as JSON;
      console.log(this.dashboarddata);
    })
    this.httpClient.get('http://127.0.0.1:5002/akdtable').subscribe(data => {
      this.akddata = data as JSON;
      console.log(this.akddata);
    })
  }

  ngOnInit(): void {
    
    
    

  }
  getdashboarddata()
  {
     this.httpClient.get('http://127.0.0.1:5002/dashboard/'+this.bazar.bazar_id).subscribe(data => {
      this.dashboarddata = data as JSON;
      console.log(this.dashboarddata);
    })
  }

  fillakdtable (akddata)
  {
    this.akddata = akddata
    this.httpClient.post('http://127.0.0.1:5002/addakddata',akddata,httpOptions).subscribe(data => {
      console.log('data receivesd:', data);
    }, err => {
      console.log('error from backend:', err);
    })
  }
  filltable(dashboard) {
    this.dashboarddata = dashboard
      this.httpClient.post('http://127.0.0.1:5002/adddata',dashboard,httpOptions).subscribe(data => {
        console.log('data receivesd:', data);
      }, err => {
        console.log('error from backend:', err);
      });
  }

  getclientdata(){

    console.log("hiiiiiiii");
    this.httpClient.get('http://127.0.0.1:5002/getclientdata/'+this.client.clientid)
      .subscribe(data => {this.clientdata = data as JSON;
        this.client.name = this.clientdata[0].name;
       
      })
     
      for (let row  of this.historydata)
      {
        if(row['client_id']== this.client.clientid )
        { 
          if(row['code'] == 2)

          {
            console.log(row['bet_total'])
            this.panatotal = +this.panatotal + +row['bet_total'];
          }

          else if(row['code'] == 1){
            this.akdtotal = +this.akdtotal + +row['bet_total'];
          }
        }
        this.total = this.panatotal + this.akdtotal;

      }

  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }
  getAllEmployees() {
    if (this.code == '2')
    {

      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet;
      this.history.bet_total = this.bet;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code =  this.code;
      this.history.number = this.number;
      this.httpClient.post('http://127.0.0.1:5002/addhistory',this.history,httpOptions).subscribe(data => {
      console.log('data receivesd:', data);
    }, err => {
      console.log('error from backend:', err);
    })
      console.log('hi');
      console.log(this.number);

      console.log(this.dashboarddata);
        
    
      for (let row  of this.dashboarddata)
      {
        
        for (let column of this.head){
         
  
            if (row[column] == this.number){
             console.log('yo');
              var i =this.head.indexOf(column);
              var j = this.tail[i];
              if(row[j] == 0)
              {
                this.bet1 = this.bet;
              }
              else 
              {
                console.log("row of j",+row[j], typeof(+row[j]));
                this.bet1 = +this.bet + +row[j] ; 
              }
            

              this.demo = {'code1' : column , 'number' : this.number , 'code2' : j ,'bet' : this.bet1};
              this.httpClient.put('http://127.0.0.1:5002/updatebet/'+this.bazar.bazar_id,this.demo,httpOptions).subscribe(data => {
                console.log('data receivesd:', data);
              }, err => {
                console.log('error from backend:', err);
              });
            }
          
          
        }
      }   
    }
    this.httpClient.get('http://127.0.0.1:5002/dashboard/'+this.bazar.bazar_id).subscribe(data => {
      this.dashboarddata = data as JSON;
      console.log(this.dashboarddata);
    })
    this.httpClient.get('http://127.0.0.1:5002/history/'+this.bazar.bazar_id).subscribe(data =>{ 
      this.historydata = data as JSON;
      //this.history = this.historydata;
      console.log(this.historydata);
      
      
     })
    //window.location.reload();
  }
  
}
