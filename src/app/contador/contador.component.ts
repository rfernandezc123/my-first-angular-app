import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  
  constructor(){}

  number: number = 10;

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  
  sum() : void {
    this.number ++;
  }
  subtract() {
    this.number --;
  }
}
