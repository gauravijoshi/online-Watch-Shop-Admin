import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent} from './main-screen/main-screen.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { Cat1Component } from './cat1/cat1.component';
import { DeleteCatComponent } from './delete-cat/delete-cat.component';
import { CreateProComponent } from './create-pro/create-pro.component';
import { UpdateProComponent } from './update-pro/update-pro.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import { Pro1Component } from './pro1/pro1.component';
import { UsersComponent } from './users/users.component';



const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:MainScreenComponent},
    {path:'create-cat',component:CreateCatComponent},
    {path:'update-cat/:id',component:UpdateCatComponent},
    {path:'delete-cat/:id',component:DeleteCatComponent},
    {path:'cat1',component:Cat1Component},
    {path:'create-pro',component:CreateProComponent},
    {path:'update-pro/:id',component:UpdateProComponent},
    {path:'delete-pro/:id',component:DeleteProComponent},
    {path:'pro1',component:Pro1Component},
    {path:'users',component:UsersComponent}
   

];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}