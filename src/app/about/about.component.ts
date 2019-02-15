import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: Person = {
    name: 'Truong Duy Chuc',
    age: 20,
    gender: 'male',
    imageUrl: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

}
