'use strict';

class person {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

const baiying = new person(155, 40);
console.log(`height: ${baiying.height}, weight: ${baiying.weight}`);

class girl extends person {
  constructor(height, weight, boyfriend) {
    super(height, weight);
    this.boyfriend = boyfriend;
  }

  static getSex() {
    return 'girl';
  }

  printInfo() {
    console.log(`height: ${this.height},\
 weight: ${this.weight}, \
 boyfriend：${this.boyfriend}`);
  }
}

const yangzhanmei = new girl(155, 50, 'tom');
console.log(girl.getSex());
yangzhanmei.printInfo();
