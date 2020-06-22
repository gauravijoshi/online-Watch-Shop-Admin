import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent implements OnInit {

  category : Category;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; })
  {

    console.log(postData);

    this.http .post('http://localhost:3006/api/category/create',postData).subscribe(responseData => {
        console.log(responseData);
        alert("required category is created");
        //form.reset();
      });

  }

}