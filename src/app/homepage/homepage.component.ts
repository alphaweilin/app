import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isSearch = false;
  isCurrent = false;
  isCompleted = false;

  courses: Course[];

  constructor() { }

  ngOnInit() {
    this.showSearch();
  }

  showSearch(): void {
    this.isSearch = true;
    this.isCurrent = false;
    this.isCompleted = false;
  }

  ShowCurrent(): void {
    this.isSearch = false;
    this.isCurrent = true;
    this.isCompleted = false;
  }

  showCompleted(): void {
    this.isSearch = false;
    this.isCurrent = false;
    this.isCompleted = true;
  }

  search(): void {
    this.courses = [{ name: 'spring boot', avg: 5, completedPercent: 88 }];
  }

}
