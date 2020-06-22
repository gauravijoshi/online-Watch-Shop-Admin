import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppRoutingModule } from './app-routing.model';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { Cat1Component } from './cat1/cat1.component';
import { DeleteCatComponent } from './delete-cat/delete-cat.component';
import { CreateProComponent } from './create-pro/create-pro.component';
import { Pro1Component } from './pro1/pro1.component';
import { UpdateProComponent } from './update-pro/update-pro.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import { ProductServices } from './product.service';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    CreateCatComponent,
    UpdateCatComponent,
    Cat1Component,
    DeleteCatComponent,
    CreateProComponent,
    UpdateProComponent,
    DeleteProComponent,
    Pro1Component,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }