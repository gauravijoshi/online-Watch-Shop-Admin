import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id: number;
  user : User[];
  route: any;
  users: any[];
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<{[key:string]:User}>("http://localhost:3006/api/user")
    .pipe(map(
      responseData => 
      {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        //console.log(postArray);
        return postArray;

           
    })).subscribe(users =>{
     //   console.log("array"+posts);
  
       this.users = users;
     })
   
    ;

    
  }
 
 
  

}