class Vehicle {
  size;
  tires;
  color;
  constructor(size, tires, color) {
    this.size = size;
    this.tires = tires;
    this.color = color;
  }
  returnText() {
    return `${this.size},${this.tires},${this.color}`;
  }
  static biggerSize(array) {
    let maxSize = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxSize.size < array[i].size) {
        maxSize = array[i];
      }
    }
    return maxSize;
  }
}

class Bike extends Vehicle {
  printFromAbba() {
    return `${super.returnText()}`;
  }
  returnName() {
    return `${Bike.name.toUpperCase()}`;
  }
  get GetUpperCase() {
    return this.returnName();
  }
}

let bike1 = new Bike(231, 654, "Blue");
console.log(bike1);

class Bus extends Vehicle {
  printFromAbba() {
    return `${super.returnText()}`;
  }
}

let bus1 = new Bus(5555, 888888, "Yellow");
console.log(bus1);

class Airplane extends Vehicle {
  printFromAbba() {
    return `${super.returnText()}`;
  }
}

let airplane1 = new Airplane(70000, 3, "White");
console.log(airplane1);

console.log(bike1.GetUpperCase);

console.log(Vehicle.biggerSize([bike1, airplane1, bus1]));
let obj;
sendBtn.onclick = () => {
  switch (Selector.value) {
    case "Bike":
      obj = new Bike(sizeInput.value, tiresInput.value, colorInput.value);
      console.log(obj);
      break;
    case "Bus":
      obj = new Bus(sizeInput.value, tiresInput.value, colorInput.value);

      console.log(obj);
      break;
    case "Airplane":
      obj = new Airplane(sizeInput.value, tiresInput.value, colorInput.value);

      console.log(obj);
      break;

    default:
      break;
  }
  for (const key in obj) {
tr1.innerHTML += `<td>${key}</td>`
tr2.innerHTML += `<td>${obj[key]}</td>`

    }

  }