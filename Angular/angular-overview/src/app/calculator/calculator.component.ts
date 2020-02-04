import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  fisrt: number;
  second: number;
  operator = '+';
  result: number;

  constructor() {
  }

  ngOnInit() {
  }

  onChangeFisrt(value) {
    this.fisrt = Number(value);
  }

  onChangeSecond(value) {
    this.second =  Number(value);
  }

  onChangeOperator(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.fisrt + this.second;
        break;
      case '-':
        this.result = this.fisrt - this.second;
        break;
      case '*':
        this.result = this.fisrt * this.second;
        break;
      case '/':
        this.result = this.fisrt / this.second;
        break;
    }
  }

}
