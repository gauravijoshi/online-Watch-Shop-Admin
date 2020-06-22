import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {
  id: number;
  products : Product[];
  route: any;
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product")
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

           
    })).subscribe(products =>{
     //   console.log("array"+posts);
  
       this.products = products;
     })
   
    ;

    
  }
  // deleteCat()
  // {
  //   let id2 = this.route.snapshot.paramMap.get('id');
  //   //console.log(postData);

  //   this.http .delete("http://localhost:3006/api/category/"+id2).subscribe(responseData => {
  //       console.log(responseData);
  //       alert("required category is deleted");
  //       //form.reset();
  //     });

  // }
 
  

}