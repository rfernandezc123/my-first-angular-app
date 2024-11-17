import { Component } from '@angular/core';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.scss']
})
export class BuclesComponent {

  persons: Person[] = [
    { name: 'John', age: 30 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 25 },
    { name: 'Jane', age: 28 }
  ];
}
