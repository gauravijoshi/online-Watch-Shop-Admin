import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-delete-pro',
  templateUrl: './delete-pro.component.html',
  styleUrls: ['./delete-pro.component.css']
})
export class DeleteProComponent implements OnInit {

  id: number;
  product : Product;
  constructor(private route: ActivatedRoute,
    private  router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onDeletePost(postData: { name: string; description: string, price: number, category: [Category], stock: number, productImagePath: string; })
  {
    let id2 = this.route.snapshot.paramMap.get('id');
    console.log(postData);

    this.http .delete("http://localhost:3006/api/product/"+id2).subscribe(responseData => {
        console.log(responseData);
        alert("required product is deleted");
        //form.reset();
      });

  }

}