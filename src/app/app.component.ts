import { Component } from '@angular/core';
import { Person } from './intefaces/person';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nhat!!!';
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Alan Walker', height: 150, weight: 80},
    {name: 'Nick Vuzic', height: 50, weight: 51}
  ]
}
