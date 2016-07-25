'use strict';

class person{
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

const baiying = new person(155,40);
console.log(`height: ${baiying.height}, weight: ${baiying.weight}`);
