import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProductServices } from '../product.service';
@Component({
  selector: 'app-create-pro',
  templateUrl: './create-pro.component.html',
  styleUrls: ['./create-pro.component.css']
})
export class CreateProComponent implements OnInit {

  product : Product;
  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; description: string, price: number, category: [Category], stock: number, productImagePath: string; })
  {

    console.log(postData);

    this.http .post('http://localhost:3006/api/product/create',postData).subscribe(responseData => {
        console.log(responseData);
        alert("required product is created");
        //form.reset();
      });

  }

}