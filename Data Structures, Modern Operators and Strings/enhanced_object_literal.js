const otherObj = {
  age: 23,
};

const obj = {
  add: function () {
    console.log("add");
  },

  add1() {
    console.log("enhanced literal");
  },

  add2: () => {
    console.log("wow");
  },

  otherObj: otherObj,

  // enhaced object literal in ES6
  otherObj,
};

obj.add();
