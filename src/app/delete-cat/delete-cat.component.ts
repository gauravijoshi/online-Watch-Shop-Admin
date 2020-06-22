import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './delete-cat.component.html',
  styleUrls: ['./delete-cat.component.css']
})
export class DeleteCatComponent implements OnInit {

  id: number;
  category : Category;
  constructor(private route: ActivatedRoute,
    private  router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onDeletePost(postData: { name: string; })
  {
    let id2 = this.route.snapshot.paramMap.get('id');
    console.log(postData);

    this.http .delete("http://localhost:3006/api/category/"+id2).subscribe(responseData => {
        console.log(responseData);
        alert("required category is deleted");
        //form.reset();
      });

  }

}