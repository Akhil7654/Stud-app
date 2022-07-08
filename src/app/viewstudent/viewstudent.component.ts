import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
          hii="love you babee"
          data=[
            {"name":"you","age":18,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZDabpYnE3St-xoZZgVSGgRMIn3km-RjzE4YooiGV5R4kklAzNzb8GVZwLGCHzPW4puQ&usqp=CAU"},
            {"name":"Srinidhi","age":26,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLZqE5WBpfpFIMnQHeb1zWVgs1dfz-Ytf-A&usqp=CAU"},
            {"name":"Priyanka","age":24,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrznOeW0WCEdK_kQMCcYRQEGQqgtMyXTunPQ&usqp=CAU"},
            {"name":"Krithi","age":18,"photo":"https://static.toiimg.com/thumb/msid-89074835,width-900,height-1200,resizemode-6.cms"}
          ]
}
