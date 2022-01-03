import { Component, OnInit } from '@angular/core';
import { blogService } from '../shared/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor( private blogservice :blogService) { }

  public blogsList : any = [];

  ngOnInit(): void {
    this.blogservice .all().subscribe(
      res => this.blogsList = res
    );
  }

}
