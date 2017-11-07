import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  navLinks: any[];
  constructor() {
    this.navLinks = [
    {path: '/new', label: 'New'},
    {path: '/progress', label: 'In progress'},
    {path: '/completed', label: 'Complited'},
    {path: '/defeated', label: 'Defeated'},
  ];
  }
  ngOnInit() {}
}
