import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  id: number;
  category : Category;
  constructor(private route: ActivatedRoute,
    private  router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onUpdatePut(postData: { name: string; })
  {
    let id2 = this.route.snapshot.paramMap.get('id');
    console.log(postData);

    this.http .put("http://localhost:3006/api/category/"+id2,postData).subscribe(responseData => {
        console.log(responseData);
        alert("required category is updated");
        //form.reset();
      });

  }

}