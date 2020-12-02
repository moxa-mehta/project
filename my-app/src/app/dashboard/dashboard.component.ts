import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from "../hero.model";
import { Database } from "../database.model";
import {Individualhist} from "../individualhist.model"
import { Client } from "../client.model";
import { Adkdata } from "../adkdata.model";
import { History } from "../history.model";
import { Account } from "../account.model";
import { Datelist } from "../datelist.model";
import { Classhistory } from "../classhistory.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DASHBOARDComponent implements OnInit {
  @Input() bazar: Hero = { bazar_id: "1", name: "A" };

  @Input() datelist: Datelist = { date: "" };
  @Input() account: Account = {
    bazar: "",
    client: "",
    total: 0,
    totalakd: 0,
    totalpanu: 0,
    valan: 0,
    commission: 0,
    final: 0,
    date: "",
  };
  @Input() history: History = {
    sr_no : 0,
    client_id: "",
    number: "",
    bet: 0,
    bet_total: 0,
    code: "",
    bazar: "",
  };
  @Input() individualhist : Individualhist = {
    sr_no : 0,
    client_id : "",
    bazar_id: "",
    number : "",
    bet : 0,
    type :""

  }
  @Input() bet: number;
  @Input() bet2 : number;
  @Input() bet1: number;
  @Input() code: string;
  @Input() number: string;
  @Input() client: Client = {
    name: "",
    akd_com: 0,
    akd_rate: 0,
    dp_rate: 0,
    clientid: "",
    pana_com: 0,
    id: "",
    tp_rate: 0,
    sp_rate: 0,
  };
  @Input() clienthistory: Classhistory = {
    client_id: "",
    bazar_id: "",
    panu_total: 0,
    akd_total: 0,
    total: 0,
  };
  dashboarddata: any;
  akd_limit: number = 100;
  dp_limit: number = 100;
  tp_limit: number = 100;
  sp_limit: number = 100;
  akd: string;
  pana: string;
  panatotal: number = 0;
  akdtotal: number = 0;
  overall_pana_total : number = 0;
  overall_akd_total : number = 0;
  overall_total : number;
  total: number = 0;
  clientstatistics: any;
  historydata: any;
  demo: any;
  globalc: number = 0;
  updatedata: JSON;
  clientdata: JSON;
  clienthistoryj: JSON;
  clients_data: any;
  akddata: any;
  individualhistdata:any;
  serverData: JSON;
  employeeData: JSON;
  clienthistorydata:any;
  head = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  tail = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "010"];
  headers = [
    "1",
    "01",
    "2",
    "02",
    "3",
    "03",
    "4",
    "04",
    "5",
    "05",
    "6",
    "06",
    "7",
    "07",
    "8",
    "08",
    "9",
    "09",
    "10",
    "010",
  ];
  akdheaders = ["Akd", "Data"];
  aheaders = ["akd", "data"];
  historyheaders = ["sr_no","client_id", "bet", "bet_total", "code", "number", "bazar"];
  totalpanu: number;
  totalakd: number;
  history_no : number;

  seventeen = [
    "123",
    "234",
    "345",
    "456",
    "567",
    "678",
    "789",
    "890",
    "120",
    "190",
  ];

  constructor(private httpClient: HttpClient) {

    this.httpClient
    .get("http://127.0.0.1:5002/clienthistory/" + this.bazar.bazar_id)
    .subscribe((data) => {
      this.clienthistorydata = data as JSON;
      for(let row of this.clienthistorydata)
      {
        this.overall_pana_total = +this.overall_pana_total + +row['pana_total'] 
        this.overall_akd_total = +this.overall_akd_total + +row['akd_total']

      }
      this.overall_total = this.overall_pana_total + this.overall_akd_total;
      //this.history = this.historydata;
      //console.log(this.historydata);
    });
    this.httpClient
      .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.historydata = data as JSON;
        //this.history = this.historydata;
        console.log(this.historydata);
      });

    this.httpClient
      .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.dashboarddata = data as JSON;
        //console.log(this.clienthistoryj);
          if (Object.keys(this.dashboarddata).length)
          {

          }
          else{
            for (var i = 1; i < 13; i++) {
              //let x1 : Database =
              let x1 = {
                tum: [
                  {
                    Bazar: i.toString(),
                    "1": "128",
                    "01": 0,
                    "2": "129",
                    "02": 0,
                    "3": "120",
                    "03": 0,
                    "4": "130",
                    "04": 0,
                    "5": "140",
                    "05": 0,
                    "6": "123",
                    "06": 0,
                    "7": "124",
                    "07": 0,
                    "8": "125",
                    "08": 0,
                    "9": "126",
                    "09": 0,
                    "10": "127",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "137",
                    "01": 0,
                    "2": "138",
                    "02": 0,
                    "3": "139",
                    "03": 0,
                    "4": "149",
                    "04": 0,
                    "5": "159",
                    "05": 0,
                    "6": "150",
                    "06": 0,
                    "7": "160",
                    "07": 0,
                    "8": "134",
                    "08": 0,
                    "9": "135",
                    "09": 0,
                    "10": "136",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "146",
                    "01": 0,
                    "2": "147",
                    "02": 0,
                    "3": "148",
                    "03": 0,
                    "4": "158",
                    "04": 0,
                    "5": "168",
                    "05": 0,
                    "6": "169",
                    "06": 0,
                    "7": "179",
                    "07": 0,
                    "8": "170",
                    "08": 0,
                    "9": "180",
                    "09": 0,
                    "10": "145",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "236",
                    "01": 0,
                    "2": "156",
                    "02": 0,
                    "3": "157",
                    "03": 0,
                    "4": "167",
                    "04": 0,
                    "5": "230",
                    "05": 0,
                    "6": "178",
                    "06": 0,
                    "7": "250",
                    "07": 0,
                    "8": "189",
                    "08": 0,
                    "9": "234",
                    "09": 0,
                    "10": "190",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "245",
                    "01": 0,
                    "2": "237",
                    "02": 0,
                    "3": "238",
                    "03": 0,
                    "4": "239",
                    "04": 0,
                    "5": "249",
                    "05": 0,
                    "6": "240",
                    "06": 0,
                    "7": "269",
                    "07": 0,
                    "8": "260",
                    "08": 0,
                    "9": "270",
                    "09": 0,
                    "10": "235",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "290",
                    "01": 0,
                    "2": "246",
                    "02": 0,
                    "3": "247",
                    "03": 0,
                    "4": "248",
                    "04": 0,
                    "5": "258",
                    "05": 0,
                    "6": "259",
                    "06": 0,
                    "7": "278",
                    "07": 0,
                    "8": "279",
                    "08": 0,
                    "9": "289",
                    "09": 0,
                    "10": "280",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "380",
                    "01": 0,
                    "2": "345",
                    "02": 0,
                    "3": "256",
                    "03": 0,
                    "4": "257",
                    "04": 0,
                    "5": "267",
                    "05": 0,
                    "6": "268",
                    "06": 0,
                    "7": "340",
                    "07": 0,
                    "8": "350",
                    "08": 0,
                    "9": "360",
                    "09": 0,
                    "10": "370",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "470",
                    "01": 0,
                    "2": "390",
                    "02": 0,
                    "3": "346",
                    "03": 0,
                    "4": "347",
                    "04": 0,
                    "5": "348",
                    "05": 0,
                    "6": "349",
                    "06": 0,
                    "7": "359",
                    "07": 0,
                    "8": "369",
                    "08": 0,
                    "9": "379",
                    "09": 0,
                    "10": "389",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "489",
                    "01": 0,
                    "2": "480",
                    "02": 0,
                    "3": "490",
                    "03": 0,
                    "4": "356",
                    "04": 0,
                    "5": "357",
                    "05": 0,
                    "6": "358",
                    "06": 0,
                    "7": "368",
                    "07": 0,
                    "8": "378",
                    "08": 0,
                    "9": "450",
                    "09": 0,
                    "10": "460",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "560",
                    "01": 0,
                    "2": "570",
                    "02": 0,
                    "3": "580",
                    "03": 0,
                    "4": "590",
                    "04": 0,
                    "5": "456",
                    "05": 0,
                    "6": "367",
                    "06": 0,
                    "7": "458",
                    "07": 0,
                    "8": "459",
                    "08": 0,
                    "9": "469",
                    "09": 0,
                    "10": "479",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "579",
                    "01": 0,
                    "2": "589",
                    "02": 0,
                    "3": "670",
                    "03": 0,
                    "4": "680",
                    "04": 0,
                    "5": "690",
                    "05": 0,
                    "6": "457",
                    "06": 0,
                    "7": "467",
                    "07": 0,
                    "8": "468",
                    "08": 0,
                    "9": "478",
                    "09": 0,
                    "10": "569",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "678",
                    "01": 0,
                    "2": "679",
                    "02": 0,
                    "3": "689",
                    "03": 0,
                    "4": "789",
                    "04": 0,
                    "5": "780",
                    "05": 0,
                    "6": "790",
                    "06": 0,
                    "7": "890",
                    "07": 0,
                    "8": "567",
                    "08": 0,
                    "9": "568",
                    "09": 0,
                    "10": "578",
                    "010": 0,
                    type: "S",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "100",
                    "01": 0,
                    "2": "110",
                    "02": 0,
                    "3": "166",
                    "03": 0,
                    "4": "112",
                    "04": 0,
                    "5": "113",
                    "05": 0,
                    "6": "114",
                    "06": 0,
                    "7": "115",
                    "07": 0,
                    "8": "116",
                    "08": 0,
                    "9": "117",
                    "09": 0,
                    "10": "118",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "119",
                    "01": 0,
                    "2": "200",
                    "02": 0,
                    "3": "229",
                    "03": 0,
                    "4": "220",
                    "04": 0,
                    "5": "122",
                    "05": 0,
                    "6": "277",
                    "06": 0,
                    "7": "133",
                    "07": 0,
                    "8": "224",
                    "08": 0,
                    "9": "144",
                    "09": 0,
                    "10": "226",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "155",
                    "01": 0,
                    "2": "228",
                    "02": 0,
                    "3": "300",
                    "03": 0,
                    "4": "266",
                    "04": 0,
                    "5": "177",
                    "05": 0,
                    "6": "330",
                    "06": 0,
                    "7": "188",
                    "07": 0,
                    "8": "233",
                    "08": 0,
                    "9": "199",
                    "09": 0,
                    "10": "244",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "227",
                    "01": 0,
                    "2": "255",
                    "02": 0,
                    "3": "337",
                    "03": 0,
                    "4": "338",
                    "04": 0,
                    "5": "339",
                    "05": 0,
                    "6": "448",
                    "06": 0,
                    "7": "223",
                    "07": 0,
                    "8": "288",
                    "08": 0,
                    "9": "225",
                    "09": 0,
                    "10": "299",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "335",
                    "01": 0,
                    "2": "336",
                    "02": 0,
                    "3": "355",
                    "03": 0,
                    "4": "400",
                    "04": 0,
                    "5": "366",
                    "05": 0,
                    "6": "466",
                    "06": 0,
                    "7": "377",
                    "07": 0,
                    "8": "440",
                    "08": 0,
                    "9": "388",
                    "09": 0,
                    "10": "334",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "344",
                    "01": 0,
                    "2": "499",
                    "02": 0,
                    "3": "445",
                    "03": 0,
                    "4": "446",
                    "04": 0,
                    "5": "447",
                    "05": 0,
                    "6": "556",
                    "06": 0,
                    "7": "449",
                    "07": 0,
                    "8": "477",
                    "08": 0,
                    "9": "559",
                    "09": 0,
                    "10": "488",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "399",
                    "01": 0,
                    "2": "660",
                    "02": 0,
                    "3": "599",
                    "03": 0,
                    "4": "455",
                    "04": 0,
                    "5": "500",
                    "05": 0,
                    "6": "600",
                    "06": 0,
                    "7": "557",
                    "07": 0,
                    "8": "558",
                    "08": 0,
                    "9": "577",
                    "09": 0,
                    "10": "550",
                    "010": 0,
                    type: "D",
                  },
                  {
                    Bazar: i.toString(),
                    "1": "588",
                    "01": 0,
                    "2": "688",
                    "02": 0,
                    "3": "779",
                    "03": 0,
                    "4": "699",
                    "04": 0,
                    "5": "799",
                    "05": 0,
                    "6": "880",
                    "06": 0,
                    "7": "566",
                    "07": 0,
                    "8": "800",
                    "08": 0,
                    "9": "667",
                    "09": 0,
                    "10": "668",
                    "010": 0,
                    type: "D",
                  },
        
                  {
                    Bazar: i.toString(),
                    "1": "669",
                    "01": 0,
                    "2": "778",
                    "02": 0,
                    "3": "788",
                    "03": 0,
                    "4": "770",
                    "04": 0,
                    "5": "889",
                    "05": 0,
                    "6": "899",
                    "06": 0,
                    "7": "700",
                    "07": 0,
                    "8": "990",
                    "08": 0,
                    "9": "900",
                    "09": 0,
                    "10": "677",
                    "010": 0,
                    type: "D",
                  },
        
                  {
                    Bazar: i.toString(),
                    "1": "777",
                    "01": 0,
                    "2": "444",
                    "02": 0,
                    "3": "111",
                    "03": 0,
                    "4": "888",
                    "04": 0,
                    "5": "555",
                    "05": 0,
                    "6": "222",
                    "06": 0,
                    "7": "999",
                    "07": 0,
                    "8": "666",
                    "08": 0,
                    "9": "333",
                    "09": 0,
                    "10": "1000",
                    "010": 0,
                    type: "T",
                  },
                ],
              };
              
        
               this.filltable(x1);
               
            }
          }

          this.httpClient
      .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.dashboarddata = data as JSON;

        console.log(this.dashboarddata);
      });

        //console.log(this.dashboarddata);
      });
    this.httpClient
      .get("http://127.0.0.1:5002/akdtable/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.akddata = data as JSON;
        if (Object.keys(this.akddata).length)
        {
        }
        else
        {
          for (var i = 1; i < 13; i++) {

            let x2 = {
              tum: [
                { akd: "1", data: 0, bazar_id: i.toString() },
                { akd: "2", data: 0, bazar_id: i.toString() },
                { akd: "3", data: 0, bazar_id: i.toString() },
                { akd: "4", data: 0, bazar_id: i.toString() },
                { akd: "5", data: 0, bazar_id: i.toString() },
                { akd: "6", data: 0, bazar_id: i.toString() },
                { akd: "7", data: 0, bazar_id: i.toString() },
                { akd: "8", data: 0, bazar_id: i.toString() },
                { akd: "9", data: 0, bazar_id: i.toString() },
                { akd: "0", data: 0, bazar_id: i.toString() },
              ],
            };
    
            this.fillakdtable(x2);
            //console.log(this.akddata);
          }
        }
        this.httpClient
      .get("http://127.0.0.1:5002/akdtable/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.akddata = data as JSON;
        console.log(this.akddata);
      });
      });
  }

  ngOnInit(): void {}
  getdashboarddata() {
    this.httpClient
      .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.dashboarddata = data as JSON;

        console.log(this.dashboarddata);
      });
    this.httpClient
      .get("http://127.0.0.1:5002/akdtable/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.akddata = data as JSON;
        console.log(this.akddata);
      });

    this.httpClient
      .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.historydata = data as JSON;
        //this.history = this.historydata;
        console.log(this.historydata);
      });
  }

  async reset() {
    this.overall_pana_total = 0;
    this.overall_total = 0;
    this.overall_akd_total = 0;
    this.httpClient
      .delete("http://127.0.0.1:5002/deletedashboard", httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );
    this.httpClient
      .delete("http://127.0.0.1:5002/deletehistory", httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );
    this.httpClient
      .delete("http://127.0.0.1:5002/deleteakdtable", httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );

    this.httpClient
      .delete("http://127.0.0.1:5002/deletetable", httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );

    for (var i = 1; i < 13; i++) {
      //let x1 : Database =
      let x1 = {
        tum: [
          {
            Bazar: i.toString(),
            "1": "128",
            "01": 0,
            "2": "129",
            "02": 0,
            "3": "120",
            "03": 0,
            "4": "130",
            "04": 0,
            "5": "140",
            "05": 0,
            "6": "123",
            "06": 0,
            "7": "124",
            "07": 0,
            "8": "125",
            "08": 0,
            "9": "126",
            "09": 0,
            "10": "127",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "137",
            "01": 0,
            "2": "138",
            "02": 0,
            "3": "139",
            "03": 0,
            "4": "149",
            "04": 0,
            "5": "159",
            "05": 0,
            "6": "150",
            "06": 0,
            "7": "160",
            "07": 0,
            "8": "134",
            "08": 0,
            "9": "135",
            "09": 0,
            "10": "136",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "146",
            "01": 0,
            "2": "147",
            "02": 0,
            "3": "148",
            "03": 0,
            "4": "158",
            "04": 0,
            "5": "168",
            "05": 0,
            "6": "169",
            "06": 0,
            "7": "179",
            "07": 0,
            "8": "170",
            "08": 0,
            "9": "180",
            "09": 0,
            "10": "145",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "236",
            "01": 0,
            "2": "156",
            "02": 0,
            "3": "157",
            "03": 0,
            "4": "167",
            "04": 0,
            "5": "230",
            "05": 0,
            "6": "178",
            "06": 0,
            "7": "250",
            "07": 0,
            "8": "189",
            "08": 0,
            "9": "234",
            "09": 0,
            "10": "190",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "245",
            "01": 0,
            "2": "237",
            "02": 0,
            "3": "238",
            "03": 0,
            "4": "239",
            "04": 0,
            "5": "249",
            "05": 0,
            "6": "240",
            "06": 0,
            "7": "269",
            "07": 0,
            "8": "260",
            "08": 0,
            "9": "270",
            "09": 0,
            "10": "235",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "290",
            "01": 0,
            "2": "246",
            "02": 0,
            "3": "247",
            "03": 0,
            "4": "248",
            "04": 0,
            "5": "258",
            "05": 0,
            "6": "259",
            "06": 0,
            "7": "278",
            "07": 0,
            "8": "279",
            "08": 0,
            "9": "289",
            "09": 0,
            "10": "280",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "380",
            "01": 0,
            "2": "345",
            "02": 0,
            "3": "256",
            "03": 0,
            "4": "257",
            "04": 0,
            "5": "267",
            "05": 0,
            "6": "268",
            "06": 0,
            "7": "340",
            "07": 0,
            "8": "350",
            "08": 0,
            "9": "360",
            "09": 0,
            "10": "370",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "470",
            "01": 0,
            "2": "390",
            "02": 0,
            "3": "346",
            "03": 0,
            "4": "347",
            "04": 0,
            "5": "348",
            "05": 0,
            "6": "349",
            "06": 0,
            "7": "359",
            "07": 0,
            "8": "369",
            "08": 0,
            "9": "379",
            "09": 0,
            "10": "389",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "489",
            "01": 0,
            "2": "480",
            "02": 0,
            "3": "490",
            "03": 0,
            "4": "356",
            "04": 0,
            "5": "357",
            "05": 0,
            "6": "358",
            "06": 0,
            "7": "368",
            "07": 0,
            "8": "378",
            "08": 0,
            "9": "450",
            "09": 0,
            "10": "460",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "560",
            "01": 0,
            "2": "570",
            "02": 0,
            "3": "580",
            "03": 0,
            "4": "590",
            "04": 0,
            "5": "456",
            "05": 0,
            "6": "367",
            "06": 0,
            "7": "458",
            "07": 0,
            "8": "459",
            "08": 0,
            "9": "469",
            "09": 0,
            "10": "479",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "579",
            "01": 0,
            "2": "589",
            "02": 0,
            "3": "670",
            "03": 0,
            "4": "680",
            "04": 0,
            "5": "690",
            "05": 0,
            "6": "457",
            "06": 0,
            "7": "467",
            "07": 0,
            "8": "468",
            "08": 0,
            "9": "478",
            "09": 0,
            "10": "569",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "678",
            "01": 0,
            "2": "679",
            "02": 0,
            "3": "689",
            "03": 0,
            "4": "789",
            "04": 0,
            "5": "780",
            "05": 0,
            "6": "790",
            "06": 0,
            "7": "890",
            "07": 0,
            "8": "567",
            "08": 0,
            "9": "568",
            "09": 0,
            "10": "578",
            "010": 0,
            type: "S",
          },
          {
            Bazar: i.toString(),
            "1": "100",
            "01": 0,
            "2": "110",
            "02": 0,
            "3": "166",
            "03": 0,
            "4": "112",
            "04": 0,
            "5": "113",
            "05": 0,
            "6": "114",
            "06": 0,
            "7": "115",
            "07": 0,
            "8": "116",
            "08": 0,
            "9": "117",
            "09": 0,
            "10": "118",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "119",
            "01": 0,
            "2": "200",
            "02": 0,
            "3": "229",
            "03": 0,
            "4": "220",
            "04": 0,
            "5": "122",
            "05": 0,
            "6": "277",
            "06": 0,
            "7": "133",
            "07": 0,
            "8": "224",
            "08": 0,
            "9": "144",
            "09": 0,
            "10": "226",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "155",
            "01": 0,
            "2": "228",
            "02": 0,
            "3": "300",
            "03": 0,
            "4": "266",
            "04": 0,
            "5": "177",
            "05": 0,
            "6": "330",
            "06": 0,
            "7": "188",
            "07": 0,
            "8": "233",
            "08": 0,
            "9": "199",
            "09": 0,
            "10": "244",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "227",
            "01": 0,
            "2": "255",
            "02": 0,
            "3": "337",
            "03": 0,
            "4": "338",
            "04": 0,
            "5": "339",
            "05": 0,
            "6": "448",
            "06": 0,
            "7": "223",
            "07": 0,
            "8": "288",
            "08": 0,
            "9": "225",
            "09": 0,
            "10": "299",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "335",
            "01": 0,
            "2": "336",
            "02": 0,
            "3": "355",
            "03": 0,
            "4": "400",
            "04": 0,
            "5": "366",
            "05": 0,
            "6": "466",
            "06": 0,
            "7": "377",
            "07": 0,
            "8": "440",
            "08": 0,
            "9": "388",
            "09": 0,
            "10": "334",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "344",
            "01": 0,
            "2": "499",
            "02": 0,
            "3": "445",
            "03": 0,
            "4": "446",
            "04": 0,
            "5": "447",
            "05": 0,
            "6": "556",
            "06": 0,
            "7": "449",
            "07": 0,
            "8": "477",
            "08": 0,
            "9": "559",
            "09": 0,
            "10": "488",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "399",
            "01": 0,
            "2": "660",
            "02": 0,
            "3": "599",
            "03": 0,
            "4": "455",
            "04": 0,
            "5": "500",
            "05": 0,
            "6": "600",
            "06": 0,
            "7": "557",
            "07": 0,
            "8": "558",
            "08": 0,
            "9": "577",
            "09": 0,
            "10": "550",
            "010": 0,
            type: "D",
          },
          {
            Bazar: i.toString(),
            "1": "588",
            "01": 0,
            "2": "688",
            "02": 0,
            "3": "779",
            "03": 0,
            "4": "699",
            "04": 0,
            "5": "799",
            "05": 0,
            "6": "880",
            "06": 0,
            "7": "566",
            "07": 0,
            "8": "800",
            "08": 0,
            "9": "667",
            "09": 0,
            "10": "668",
            "010": 0,
            type: "D",
          },

          {
            Bazar: i.toString(),
            "1": "669",
            "01": 0,
            "2": "778",
            "02": 0,
            "3": "788",
            "03": 0,
            "4": "770",
            "04": 0,
            "5": "889",
            "05": 0,
            "6": "899",
            "06": 0,
            "7": "700",
            "07": 0,
            "8": "990",
            "08": 0,
            "9": "900",
            "09": 0,
            "10": "677",
            "010": 0,
            type: "D",
          },

          {
            Bazar: i.toString(),
            "1": "777",
            "01": 0,
            "2": "444",
            "02": 0,
            "3": "111",
            "03": 0,
            "4": "888",
            "04": 0,
            "5": "555",
            "05": 0,
            "6": "222",
            "06": 0,
            "7": "999",
            "07": 0,
            "8": "666",
            "08": 0,
            "9": "333",
            "09": 0,
            "10": "1000",
            "010": 0,
            type: "T",
          },
        ],
      };
      let x2 = {
        tum: [
          { akd: "1", data: 0, bazar_id: i.toString() },
          { akd: "2", data: 0, bazar_id: i.toString() },
          { akd: "3", data: 0, bazar_id: i.toString() },
          { akd: "4", data: 0, bazar_id: i.toString() },
          { akd: "5", data: 0, bazar_id: i.toString() },
          { akd: "6", data: 0, bazar_id: i.toString() },
          { akd: "7", data: 0, bazar_id: i.toString() },
          { akd: "8", data: 0, bazar_id: i.toString() },
          { akd: "9", data: 0, bazar_id: i.toString() },
          { akd: "0", data: 0, bazar_id: i.toString() },
        ],
      };

      await this.filltable(x1);
      await this.fillakdtable(x2);
    }

    window.location.reload();
  }
  async temp(){
    await this.httpClient
      .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
      .subscribe((data) => {
        this.dashboarddata = data as JSON;
        console.log(this.dashboarddata);
      });

  }

  async delete_history(){

    this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                for( let hd of this.historydata){
                  if(hd['sr_no'] == this.history_no){

                    
                  }
                }
              });

        


  }

 show1() {
   
  this.httpClient
  .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
  .subscribe((data) => {
    this.dashboarddata = data as JSON;
    for(let row of this.dashboarddata){
      for(let column of this.tail){
      if(row['type'] == 'S' && row[column] >= this.sp_limit)
      {
        row[column] = +row[column] - +this.sp_limit;
      }
      else if (row['type'] == 'D' && row[column] >= this.dp_limit)
      {
        row[column] = +row[column] - +this.dp_limit;
      }
      else if (row['type'] == 'T' && row[column] >= this.tp_limit)
      {
        row[column] = +row[column] - +this.tp_limit;
      }
    }
  }
    console.log(this.dashboarddata);
  });

      
  }

  show2() {
    this.httpClient
    .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
    .subscribe((data) => {
      this.dashboarddata = data as JSON;
      for (let row of this.dashboarddata) {
        for (let column of this.tail) {
          if(row['type'] == 'S' && row[column] >= this.sp_limit)
          {
            row[column] = this.sp_limit;
          }
          else if (row['type'] == 'D' && row[column] >= this.dp_limit)
          {
            row[column] = this.dp_limit;
          }
          else if (row['type'] == 'T' && row[column] >= this.tp_limit)
          {
            row[column] = this.tp_limit;
          }
        }
      }
  
      console.log(this.dashboarddata);
    });

    
  }

  hide() {
    this.httpClient
    .get("http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id)
    .subscribe((data) => {
      this.dashboarddata = data as JSON;
      console.log(this.dashboarddata);
    });
  }

  fillakdtable(akddata) {
    //this.akddata = akddata
    this.httpClient
      .post("http://127.0.0.1:5002/addmultipleakddata", akddata, httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );
  }
  filltable(dashboard) {
    //this.dashboarddata = dashboard

    this.httpClient
      .post("http://127.0.0.1:5002/addmultipledata", dashboard, httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );
  }

  getclientdata() {
    console.log("hiiiiiiii");
    this.httpClient
      .get("http://127.0.0.1:5002/getclientdata/" + this.client.clientid)
      .subscribe((data) => {
        this.clientdata = data as JSON;
        this.client.name = this.clientdata[0].name;
      });
    this.httpClient
      .get(
        "http://127.0.0.1:5002/getclienthistory/" +
          this.client.clientid +
          "/" +
          this.bazar.bazar_id
      )
      .subscribe((data) => {
        this.clienthistoryj = data as JSON;
        this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
        this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
        this.clienthistory.total = this.clienthistoryj[0].total;
      });
  }

  sayHi() {
    this.httpClient.get("http://127.0.0.1:5002/").subscribe((data) => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    });
  }
  create_account() {
    //inserting in datelist table
    let date = new Date();
    this.datelist.date = date.toDateString();
    this.httpClient
      .post("http://127.0.0.1:5002/adddatelist", this.datelist, httpOptions)
      .subscribe(
        (data) => {
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );

    //inserting in account table
    

    this.httpClient.get("http://127.0.0.1:5002/clients").subscribe((data) => {
      this.clients_data = data as JSON;
      for (let row1 of this.clients_data) {
        this.totalpanu = 0;
        this.totalakd = 0;
        this.httpClient
    .get("http://127.0.0.1:5002/gethist/" + row1['client_id'])
    .subscribe((data) => {
      this.individualhistdata = data as JSON;
      
    });
        for (let row of this.individualhistdata) {
          if (row["number"] == this.pana && row["type"] == "S") {
            this.totalpanu = +row["bet"] + +this.totalpanu;
            this.account.valan = this.account.valan + this.totalpanu * row1['sp_rate'] 
          }
          if (row["number"] == this.pana && row["type"] == "D") {
            this.totalpanu = +row["bet"] + +this.totalpanu;
            this.account.valan = this.account.valan + this.totalpanu * row1['dp_rate'] 
          }
          if (row["number"] == this.pana && row["type"] == "T") {
            this.totalpanu = +row["bet"] + +this.totalpanu;
            this.account.valan = this.account.valan + this.totalpanu * row1['tp_rate'] 
          }
          if (row["number"] == this.akd && row["type"] == "A") {
            this.totalakd = +row["bet"] + +this.totalakd;
            this.account.valan = this.account.valan + this.totalpanu * row1['sp_rate'] 
          }
         
        }
        if (this.totalakd == 0 && this.totalpanu == 0) {
        } else {
          this.account.date = date.toDateString();
          this.account.totalpanu = this.totalpanu;
          this.account.totalakd = this.totalakd;
          this.account.client = row1["client_id"];
          this.account.bazar = this.bazar.bazar_id;
          this.account.total = this.overall_total;
         
          this.account.commission = ((this.overall_pana_total * row1['pana_com'] + this.overall_akd_total * row1['akd_com']) / 100) 
          this.account.final = +this.account.total - +this.account.valan - +this.account.commission;
          this.httpClient
            .post("http://127.0.0.1:5002/addaccount", this.account, httpOptions)
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );
        }
      }
    });
  }

  async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  async getAllEmployees() {
    //for code 2
    if (this.code == "2") {
      this.bet1 = this.bet;
      for (let row of this.dashboarddata) {
        for (let column of this.head) {
          if (row[column] == this.number) {
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1

            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: this.number,
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                    .get(
                      "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                    )
                    .subscribe((data) => {
                      this.dashboarddata = data as JSON;
                      console.log(data);
                      console.log(this.dashboarddata);
                    });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

            this.httpClient
              .get(
                "http://127.0.0.1:5002/getclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id
              )
              .subscribe((data) => {
                this.clienthistoryj = data as JSON;
                console.log(this.clienthistoryj);
                if (Object.keys(this.clienthistoryj).length) {
                  this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                  this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                  //console.log('pana'+this.clienthistory.panu_total)
                  this.clienthistory.total = this.clienthistoryj[0].total;
                  this.clienthistory.client_id = this.clienthistoryj[0].client_id;
                  this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
                } else {
                  this.clienthistory.client_id = this.client.clientid;
                  this.clienthistory.bazar_id = this.bazar.bazar_id;
                  this.clienthistory.panu_total = this.bet1;
                  this.clienthistory.akd_total = 0;
                  this.clienthistory.total = this.clienthistory.panu_total;
                  this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addclienthistory",
                      this.clienthistory,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
                }
              });

            this.panatotal = +this.clienthistory.panu_total + +this.bet1;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        }
      }
      
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet;
      this.history.bet_total = this.bet;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "1") {
      var l = this.number.length;
      this.globalc = 0;
      var arr = this.number.split("", l);
      this.bet1 = this.bet;
      await this.asyncForEach(arr, async (x) => {
        for (let row of this.akddata) {
          if (row["akd"] == x) {
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["akd"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = "A"
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            this.globalc = this.globalc + 1;
            if (row["data"] == 0) {
              this.bet2 = this.bet1;
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row["data"];
            }

            this.demo = { akd: row["akd"], data: this.bet2 };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateakdbet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                    .get(
                      "http://127.0.0.1:5002/akdtable/" + this.bazar.bazar_id
                    )
                    .subscribe((data) => {
                      this.akddata = data as JSON;
                      console.log(this.akddata);
                    });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        }
      });

      var akd_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;

            this.panatotal = +this.clienthistory.panu_total;
            this.akdtotal = this.clienthistory.akd_total + +this.bet1;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = 0;
            this.clienthistory.akd_total = akd_total;
            this.clienthistory.total = this.clienthistory.akd_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });

      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "3") {
      this.bet1 = this.bet;
      //console.log(this.bet1);
      this.globalc = 0;
      //for (let row of this.dashboarddata) {
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var l = this.number.length;
          var arr = this.number.split("", l);

          var count = 0;
          for (let x of arr) {
            var t = row[column].includes(x);

            if (t == true) {
              count = count + 1;
            }
          }
          if (count == 3) {
            this.globalc = +this.globalc + 1;
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            console.log(this.individualhist)
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            console.log(this.globalc);
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1;
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                    .get(
                      "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                    )
                    .subscribe((data) => {
                      this.dashboarddata = data as JSON;
                      console.log(data);
                      console.log(this.dashboarddata);
                    });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
      });

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;

            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });

      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "7") {
      var result = "0" + this.number;
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var l = this.number.length;
          var arr = this.number.split("", l);
          for (let x of arr) {
            if (row["type"] == "S" && column == x) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              if (row[result] == 0) {
                this.bet2 = this.bet1
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[result];
              }

              this.demo = {
                code1: this.number,
                number: row[this.number],
                code2: result,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                      .get(
                        "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                      )
                      .subscribe((data) => {
                        this.dashboarddata = data as JSON;
                        console.log(data);
                        console.log(this.dashboarddata);
                      });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );
            }
          }
        });
      });
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;

            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                    .get(
                      "http://127.0.0.1:5002/getclienthistory/" +
                        this.client.clientid +
                        "/" +
                        this.bazar.bazar_id
                    )
                    .subscribe((data) => {
                      this.clienthistoryj = data as JSON;
                      this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                      this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                      this.clienthistory.total = this.clienthistoryj[0].total;
                    });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
        
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });

      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "8") {
      var result = "0" + this.number;
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var l = this.number.length;
          var arr = this.number.split("", l);
          for (let x of arr) {
            if (row["type"] == "D" && column == x) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              if (row[result] == 0) {
                this.bet2 = this.bet1;
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[result];
              }

              this.demo = {
                code1: this.number,
                number: row[this.number],
                code2: result,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                      .get(
                        "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                      )
                      .subscribe((data) => {
                        this.dashboarddata = data as JSON;
                        console.log(data);
                        console.log(this.dashboarddata);
                      });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );
            }
          }
        });
      });
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;

            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                    .get(
                      "http://127.0.0.1:5002/getclienthistory/" +
                        this.client.clientid +
                        "/" +
                        this.bazar.bazar_id
                    )
                    .subscribe((data) => {
                      this.clienthistoryj = data as JSON;
                      this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                      this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                      this.clienthistory.total = this.clienthistoryj[0].total;
                    });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });

      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "9")  {

      var result = "0" + this.number;
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var l = this.number.length;
          var arr = this.number.split("", l);
          for(let x of arr){
        
        if (row["type"] == "T" && column == x) {

          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row[result] == 0) {
            this.bet2 = this.bet1
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row[result];
          }

          this.demo = {
            code1: this.number,
            number: row[this.number],
            code2: result,
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );
        }

        }  
      });
    });
    var pana_total = this.globalc * this.bet1;

    this.httpClient
      .get(
        "http://127.0.0.1:5002/getclienthistory/" +
          this.client.clientid +
          "/" +
          this.bazar.bazar_id
      )
      .subscribe((data) => {
        this.clienthistoryj = data as JSON;
        console.log(this.clienthistoryj);
        if (Object.keys(this.clienthistoryj).length) {
          this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
          this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
          //console.log('pana'+this.clienthistory.panu_total)
          this.clienthistory.total = this.clienthistoryj[0].total;
          this.clienthistory.client_id = this.clienthistoryj[0].client_id;
          this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;

          this.panatotal = +this.clienthistory.panu_total + +pana_total;
          this.akdtotal = this.clienthistory.akd_total;
          this.total = this.akdtotal + this.panatotal;
          this.clientstatistics = {
            pana_total: this.panatotal,
            akd_total: this.akdtotal,
            total: this.total,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updateclienthistory/" +
                this.client.clientid +
                "/" +
                this.bazar.bazar_id,
              this.clientstatistics,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data received:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/getclienthistory/" +
                    this.client.clientid +
                    "/" +
                    this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.clienthistoryj = data as JSON;
                  this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                  this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                  this.clienthistory.total = this.clienthistoryj[0].total;
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );
        } else {
          this.clienthistory.client_id = this.client.clientid;
          this.clienthistory.bazar_id = this.bazar.bazar_id;
          this.clienthistory.panu_total = pana_total;
          this.clienthistory.akd_total = 0;
          this.clienthistory.total = this.clienthistory.panu_total;
          this.httpClient
            .post(
              "http://127.0.0.1:5002/addclienthistory",
              this.clienthistory,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );
        }
      });

    this.history.client_id = this.client.clientid;
    this.history.bet = this.bet1;
    this.history.bet_total = this.bet1 * this.globalc;
    this.history.bazar = this.bazar.bazar_id;
    this.history.code = this.code;
    this.history.number = this.number;
    this.history.sr_no = +this.history.sr_no + 1;
    this.httpClient
      .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
      .subscribe(
        (data) => {
          this.httpClient
            .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
            .subscribe((data) => {
              this.historydata = data as JSON;
              //this.history = this.historydata;
              console.log(this.historydata);
            });
          console.log("data receivesd:", data);
        },
        (err) => {
          console.log("error from backend:", err);
        }
      );

    } else if (this.code == "6") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          if (row[column].includes(this.number)) {
            this.globalc =this.globalc + 1;
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

            
          }
        });
      });

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
  

    } else if (this.code == "10") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var count = 0;
          //var l = this.number.length;
          if (row["type"] == "S") {
            //console.log(!(row[column].includes("1") & row[column].includes("0")))

            if(!(row[column].includes("1") || row[column].includes("0"))){
            let arr = row[column].split("", 3);

            for (let x of arr) {


              count = +count + +x;
            }
            console.log("yo"+count)

            if ((count % 10) == +this.number) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              var i = this.head.indexOf(column);
              var j = this.tail[i];
              if (row[j] == 0) {
                this.bet2 = this.bet1;
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[j];
              }

              this.demo = {
                code1: column,
                number: row[column],
                code2: j,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );

              
            }
          }
        }
        })
      })

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "11") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var count = 0;
          //var l = this.number.length;
          if (row["type"] == "D") {

            if(!(row[column].includes("1") || row[column].includes("0"))){
            let arr = row[column].split("", 3);

            for (let x of arr) {


              count = +count + +x;
            }
            console.log("yo"+count)

            if ((count % 10) == +this.number) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              var i = this.head.indexOf(column);
              var j = this.tail[i];
              if (row[j] == 0) {
                this.bet2 = this.bet1;
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[j];
              }

              this.demo = {
                code1: column,
                number: row[column],
                code2: j,
                bet: this.bet,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );

              
            }
          }
        }
        })
      })

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "12") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var count = 0;
          //var l = this.number.length;
          if (row["type"] == "S") {

            if(row[column].includes("1") || row[column].includes("0")){
            let arr = row[column].split("", 3);

            for (let x of arr) {


              count = +count + +x;
            }
            console.log("yo"+count)

            if ((count % 10) == +this.number) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              var i = this.head.indexOf(column);
              var j = this.tail[i];
              if (row[j] == 0) {
                this.bet2 = this.bet1;
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[j];
              }

              this.demo = {
                code1: column,
                number: row[column],
                code2: j,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );

              
            }
          }
        }
        })
      })

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "13") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
          var count = 0;
          //var l = this.number.length;
          if (row["type"] == "D") {

            if((row[column].includes("1") || row[column].includes("0"))){
            let arr = row[column].split("", 3);

            for (let x of arr) {


              count = +count + +x;
            }
            console.log("yo"+count)

            if ((count % 10) == +this.number) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              var i = this.head.indexOf(column);
              var j = this.tail[i];
              if (row[j] == 0) {
                this.bet2 = this.bet1
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[j];
              }

              this.demo = {
                code1: column,
                number: row[column],
                code2: j,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );

              
            }
          }
        }
        })
      })

      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;

      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "17") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
         
          for (let x of this.seventeen) {
            if (row[column] == x) {
              this.globalc = this.globalc + 1 ;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              var i = this.head.indexOf(column);
              var j = this.tail[i];
              if (row[j] == 0) {
                this.bet2 = this.bet1
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row[j];
              }

              this.demo = {
                code1: column,
                number: row[column],
                code2: j,
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                    
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );

              
            }
          }
          //var l = this.number.length;
        })
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.sr_no = +this.history.sr_no + 1;
      //this.history.number = this.number;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "18") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
        
          if (row[column].includes(this.number) && row["type"] == "S") {
            this.globalc = this.globalc + 1
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

            
          }
        })
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "19") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
        
          if (row[column].includes(this.number) && (row["type"] == "T" || row["type"] == "D")) {
            this.globalc =  this.globalc + 1
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

            
          }
        })
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "20") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        this.asyncForEach(this.head, async (column) => {
        
          if (row[column].includes(this.number) && (row["type"] == "S" || row["type"] == "D" || row["type"] == "T")) {
            this.globalc =  this.globalc + 1
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

            
          }
        })
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "21") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["1"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["1"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["01"] == 0) {
            this.bet2 = this.bet1;
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["01"];
          }

          this.demo = {
            code1: "1",
            number: row["1"],
            code2: "01",
            bet: this.bet,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "22") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["2"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["2"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["02"] == 0) {
            this.bet2 = this.bet1;
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["01"];
          }

          this.demo = {
            code1: "2",
            number: row["2"],
            code2: "02",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "23") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["3"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          if (row["03"] == 0) {
            this.bet2 = this.bet1;
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["03"];
          }

          this.demo = {
            code1: "3",
            number: row["3"],
            code2: "03",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "24") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["4"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["4"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["04"] == 0) {
            this.bet2 = this.bet1;
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["04"];
          }

          this.demo = {
            code1: "4",
            number: row["4"],
            code2: "04",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );    } else if (this.code == "25") {
          this.globalc = 0;
          this.bet1 = this.bet;
          await this.asyncForEach(this.dashboarddata, async (row) => {
            
            if (row["5"].includes(this.number)) {
              this.globalc = this.globalc + 1;
              this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["5"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
              if (row["05"] == 0) {
                this.bet2 = this.bet1
              } else {
                //console.log("row of j",+row[j], typeof(+row[j]));
                this.bet2 = +this.bet1 + +row["05"];
              }
    
              this.demo = {
                code1: "5",
                number: row["5"],
                code2: "05",
                bet: this.bet2,
              };
              this.httpClient
                .put(
                  "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                  this.demo,
                  httpOptions
                )
                .subscribe(
                  (data) => {
                    console.log("data receivesd:", data);
                    this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
                  },
                  (err) => {
                    console.log("error from backend:", err);
                  }
                );
    
              
            }
          })
          var pana_total = this.globalc * this.bet1;
    
          this.httpClient
            .get(
              "http://127.0.0.1:5002/getclienthistory/" +
                this.client.clientid +
                "/" +
                this.bazar.bazar_id
            )
            .subscribe((data) => {
              this.clienthistoryj = data as JSON;
              console.log(this.clienthistoryj);
              if (Object.keys(this.clienthistoryj).length) {
                this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                //console.log('pana'+this.clienthistory.panu_total)
                this.clienthistory.total = this.clienthistoryj[0].total;
                this.clienthistory.client_id = this.clienthistoryj[0].client_id;
                this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
      
                this.panatotal = +this.clienthistory.panu_total + +pana_total;
                this.akdtotal = this.clienthistory.akd_total;
                this.total = this.akdtotal + this.panatotal;
                this.clientstatistics = {
                  pana_total: this.panatotal,
                  akd_total: this.akdtotal,
                  total: this.total,
                };
                this.httpClient
                  .put(
                    "http://127.0.0.1:5002/updateclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id,
                    this.clientstatistics,
                    httpOptions
                  )
                  .subscribe(
                    (data) => {
                      console.log("data received:", data);
                      this.httpClient
                      .get(
                        "http://127.0.0.1:5002/getclienthistory/" +
                          this.client.clientid +
                          "/" +
                          this.bazar.bazar_id
                      )
                      .subscribe((data) => {
                        this.clienthistoryj = data as JSON;
                        this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                        this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                        this.clienthistory.total = this.clienthistoryj[0].total;
                      });
                    },
                    (err) => {
                      console.log("error from backend:", err);
                    }
                  );
              } else {
                this.clienthistory.client_id = this.client.clientid;
                this.clienthistory.bazar_id = this.bazar.bazar_id;
                this.clienthistory.panu_total = pana_total;
                this.clienthistory.akd_total = 0;
                this.clienthistory.total = this.clienthistory.panu_total;
                this.httpClient
                  .post(
                    "http://127.0.0.1:5002/addclienthistory",
                    this.clienthistory,
                    httpOptions
                  )
                  .subscribe(
                    (data) => {
                      console.log("data receivesd:", data);
                    },
                    (err) => {
                      console.log("error from backend:", err);
                    }
                  );
              }
            });
      
          this.history.client_id = this.client.clientid;
          this.history.bet = this.bet1;
          this.history.bet_total = this.bet1 * this.globalc;
          this.history.bazar = this.bazar.bazar_id;
          this.history.code = this.code;
          this.history.number = this.number;
          this.history.sr_no = +this.history.sr_no + 1;
          this.httpClient
            .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
            .subscribe(
              (data) => {
                this.httpClient
                  .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
                  .subscribe((data) => {
                    this.historydata = data as JSON;
                    //this.history = this.historydata;
                    console.log(this.historydata);
                  });
                console.log("data receivesd:", data);
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );
    } else if (this.code == "26") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["6"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["6"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["06"] == 0) {
            this.bet2 = this.bet1;
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["06"];
          }

          this.demo = {
            code1: "6",
            number: row["6"],
            code2: "06",
            bet: this.bet,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "28") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["8"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["8"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["08"] == 0) {
            this.bet2 = this.bet1
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["08"];
          }

          this.demo = {
            code1: "8",
            number: row["8"],
            code2: "08",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "27") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["7"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["7"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["07"] == 0) {
            this.bet2 = this.bet1
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["07"];
          }

          this.demo = {
            code1: "7",
            number: row["7"],
            code2: "07",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "29") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["9"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["9"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["09"] == 0) {
            this.bet2 = this.bet1
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["09"];
          }

          this.demo = {
            code1: "9",
            number: row["9"],
            code2: "09",
            bet: this.bet,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    } else if (this.code == "30") {
      this.globalc = 0;
      this.bet1 = this.bet;
      await this.asyncForEach(this.dashboarddata, async (row) => {
        
        if (row["10"].includes(this.number)) {
          this.globalc = this.globalc + 1;
          this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row["10"];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
          if (row["010"] == 0) {
            this.bet2 = this.bet1
          } else {
            //console.log("row of j",+row[j], typeof(+row[j]));
            this.bet2 = +this.bet1 + +row["010"];
          }

          this.demo = {
            code1: "10",
            number: row["10"],
            code2: "010",
            bet: this.bet2,
          };
          this.httpClient
            .put(
              "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
              this.demo,
              httpOptions
            )
            .subscribe(
              (data) => {
                console.log("data receivesd:", data);
                this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                });
              },
              (err) => {
                console.log("error from backend:", err);
              }
            );

          
        }
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
       } else if (this.code == "36") {
        this.globalc = 0;
        this.bet1 = this.bet;
        await this.asyncForEach(this.dashboarddata, async (row) => {
          this.asyncForEach(this.head, async (column) => {
          if ((row["type"] = "T")) {
            this.globalc = this.globalc + 1;
            this.individualhist.client_id = this.client.clientid
            this.individualhist.sr_no = +this.history.sr_no + 1;
            this.individualhist.bazar_id = this.bazar.bazar_id;
            this.individualhist.number = row[column];
            this.individualhist.bet = this.bet1;
            this.individualhist.type = row["type"]
            this.httpClient
                    .post(
                      "http://127.0.0.1:5002/addhist",
                      this.individualhist,
                      httpOptions
                    )
                    .subscribe(
                      (data) => {
                        console.log("data receivesd:", data);
                      },
                      (err) => {
                        console.log("error from backend:", err);
                      }
                    );
            var i = this.head.indexOf(column);
            var j = this.tail[i];
            if (row[j] == 0) {
              this.bet2 = this.bet1
            } else {
              //console.log("row of j",+row[j], typeof(+row[j]));
              this.bet2 = +this.bet1 + +row[j];
            }

            this.demo = {
              code1: column,
              number: row[column],
              code2: j,
              bet: this.bet2,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updatebet/" + this.bazar.bazar_id,
                this.demo,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                  this.httpClient
                .get(
                  "http://127.0.0.1:5002/dashboard/" + this.bazar.bazar_id
                )
                .subscribe((data) => {
                  this.dashboarddata = data as JSON;
                  console.log(data);
                  console.log(this.dashboarddata);
                }); 
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );

          
          }
        })
      })
      var pana_total = this.globalc * this.bet1;

      this.httpClient
        .get(
          "http://127.0.0.1:5002/getclienthistory/" +
            this.client.clientid +
            "/" +
            this.bazar.bazar_id
        )
        .subscribe((data) => {
          this.clienthistoryj = data as JSON;
          console.log(this.clienthistoryj);
          if (Object.keys(this.clienthistoryj).length) {
            this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
            this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
            //console.log('pana'+this.clienthistory.panu_total)
            this.clienthistory.total = this.clienthistoryj[0].total;
            this.clienthistory.client_id = this.clienthistoryj[0].client_id;
            this.clienthistory.bazar_id = this.clienthistoryj[0].bazar_id;
  
            this.panatotal = +this.clienthistory.panu_total + +pana_total;
            this.akdtotal = this.clienthistory.akd_total;
            this.total = this.akdtotal + this.panatotal;
            this.clientstatistics = {
              pana_total: this.panatotal,
              akd_total: this.akdtotal,
              total: this.total,
            };
            this.httpClient
              .put(
                "http://127.0.0.1:5002/updateclienthistory/" +
                  this.client.clientid +
                  "/" +
                  this.bazar.bazar_id,
                this.clientstatistics,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data received:", data);
                  this.httpClient
                  .get(
                    "http://127.0.0.1:5002/getclienthistory/" +
                      this.client.clientid +
                      "/" +
                      this.bazar.bazar_id
                  )
                  .subscribe((data) => {
                    this.clienthistoryj = data as JSON;
                    this.clienthistory.panu_total = this.clienthistoryj[0].pana_total;
                    this.clienthistory.akd_total = this.clienthistoryj[0].akd_total;
                    this.clienthistory.total = this.clienthistoryj[0].total;
                  });
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          } else {
            this.clienthistory.client_id = this.client.clientid;
            this.clienthistory.bazar_id = this.bazar.bazar_id;
            this.clienthistory.panu_total = pana_total;
            this.clienthistory.akd_total = 0;
            this.clienthistory.total = this.clienthistory.panu_total;
            this.httpClient
              .post(
                "http://127.0.0.1:5002/addclienthistory",
                this.clienthistory,
                httpOptions
              )
              .subscribe(
                (data) => {
                  console.log("data receivesd:", data);
                },
                (err) => {
                  console.log("error from backend:", err);
                }
              );
          }
        });
  
      this.history.client_id = this.client.clientid;
      this.history.bet = this.bet1;
      this.history.bet_total = this.bet1 * this.globalc;
      this.history.bazar = this.bazar.bazar_id;
      this.history.code = this.code;
      this.history.number = this.number;
      this.history.sr_no = +this.history.sr_no + 1;
      this.httpClient
        .post("http://127.0.0.1:5002/addhistory", this.history, httpOptions)
        .subscribe(
          (data) => {
            this.httpClient
              .get("http://127.0.0.1:5002/history/" + this.bazar.bazar_id)
              .subscribe((data) => {
                this.historydata = data as JSON;
                //this.history = this.historydata;
                console.log(this.historydata);
              });
            console.log("data receivesd:", data);
          },
          (err) => {
            console.log("error from backend:", err);
          }
        );
    }
    
    this.httpClient
    .get("http://127.0.0.1:5002/clienthistory/" + this.bazar.bazar_id)
    .subscribe((data) => {
      this.clienthistorydata = data as JSON;
      for(let row of this.clienthistorydata)
      {
        this.overall_pana_total = +this.overall_pana_total + +row['pana_total'] 
        this.overall_akd_total = +this.overall_akd_total + +row['akd_total']

      }
      this.overall_total = this.overall_pana_total + this.overall_akd_total;
      //this.history = this.historydata;
      //console.log(this.historydata);
    });
    // window.location.reload();
  }
}
