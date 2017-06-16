import { Component, OnInit } from '@angular/core';
import { Person } from '../intefaces/person';
import { PeopleService} from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private _peopleService : PeopleService){ }

  ngOnInit(){
    this.people = this._peopleService.getAll();
  }
}
