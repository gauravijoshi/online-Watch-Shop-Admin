import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat1',
  templateUrl: './cat1.component.html',
  styleUrls: ['./cat1.component.css']
})
export class Cat1Component implements OnInit {
  id: number;
  categories : Category[];
  route: any;
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<{[key:string]:Category}>("http://localhost:3006/api/categories")
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

           
    })).subscribe(categories =>{
     //   console.log("array"+posts);
  
       this.categories = categories;
     })
   
    ;

    
  }
  deleteCat()
  {
    let id2 = this.route.snapshot.paramMap.get('id');
    //console.log(postData);

    this.http .delete("http://localhost:3006/api/category/"+id2).subscribe(responseData => {
        console.log(responseData);
        alert("required category is deleted");
        //form.reset();
      });

  }
 
  

}