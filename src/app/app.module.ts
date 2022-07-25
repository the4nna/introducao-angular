import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { Error404Component } from './error-404/404.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '', redirectTo: 'courses', pathMatch: 'full'
    }, {
      path: '**' /* quando não encontra a rota na aplicação */, component: Error404Component
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
