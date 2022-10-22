const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`)
}




// Class

// class Professor extends Person {

//   teaches;

//   constructor(name, teaches) {
//     super(name);
//     this.teaches = teaches;
//   }

//   introduceSelf() {
//     console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
//   }

//   grade(paper) {
//     const grade = Math.floor(Math.random() * (5 - 1) + 1);
//     console.log(grade);
//   }

// }


class Shape {

  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name
    this.sides = sides
    this.sideLength = sideLength
  }

  calcPerimeter() {
    let res = this.sides * this.sideLength
    console.log(res)
  }
}

class Square extends Shape{
  constructor(sideLength) {
    this.name = 'square'
    this.sides = 4
    this.sideLength = sideLength
  }

  calcArea() {
    console.log(this.sideLength * this.sideLength)
  }
}

// JSON

const superHeroes  = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
