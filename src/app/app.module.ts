import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllphotoComponent } from './allphoto/allphoto.component';

const appRoutes:Routes=[
  {
  path:"",component:AllphotoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
