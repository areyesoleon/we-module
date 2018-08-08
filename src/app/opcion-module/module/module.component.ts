import { Component, OnInit, Input } from '@angular/core';
import { isNil } from 'lodash';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  private _modules: any;
  constructor() { }
  ngOnInit() {

  }
  @Input() set modules(value) {
    this._modules = isNil(value) ? [] : value;
  }
  get modules() {
    return this._modules;
  }

}
