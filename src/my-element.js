import { inject, IEventAggregator } from 'aurelia';
import { testVarTwo, testObj } from './data.js';

@inject(IEventAggregator)

export class MyElement {
  constructor(ea) {
    this.ea = ea;
  }

  attached() {
    console.log(testVarTwo)
    const a = testObj
  }
}