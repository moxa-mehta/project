import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LOGINComponent } from './login/login.component';
import { DASHBOARDComponent } from './dashboard/dashboard.component';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import {CreateClientComponent} from './create-client/create-client.component';
import { AccountingComponent } from './accounting/accounting.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: DASHBOARDComponent },
  {
    path: 'login',
    component: LOGINComponent
  },
  {path: 'account', component : AccountingComponent},
  { path: 'client', component: ClientComponent },
  { path: 'addclient', component: CreateClientComponent },
  { path: '',
  component: LOGINComponent
  }

];


@NgModule({
  
  declarations: [
    AppComponent,
    LOGINComponent,
    DASHBOARDComponent,
    ClientComponent,
    CreateClientComponent,
    AccountingComponent,
   

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
