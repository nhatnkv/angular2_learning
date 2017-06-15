import { Component, OnInit } from '@angular/core';
import { Person } from '../intefaces/person';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Alan Walker', height: 150, weight: 80},
    {name: 'Nick Vuzic', height: 50, weight: 51}
  ]

  constructor() { }

  ngOnInit() {
  }

}
