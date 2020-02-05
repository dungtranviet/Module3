import {Component, OnInit} from '@angular/core';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  background = '#00e067';

  constructor() {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.background = value;
  }
}