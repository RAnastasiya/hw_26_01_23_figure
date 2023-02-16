/*
Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
і методом обчислити об'єм.

Створити класи нащадки: сфера, куб, циліндр.
Обов'яково прописати сеттери та геттери для властивостей! 
Не забувати про виброс виключень.

Використовувати конструкцію try/catch
Створити по одному екземпляру кожного класу. 

Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume: [значення об'єму].
*/
function showVolume3DFigure(obj) {
  if (obj instanceof Figure3D) {
    return `${obj.name} has volume: ${obj.getVolume()}`;
  }
  throw new TypeError("Must be Figure3D");
}

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be string");
    }
    if (value.length === 0) {
      throw new RangeError("name must be > 0");
    }
    this._name = value;
  }
  getVolume() {}
}

class Sphere extends Figure3D {
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("radius must be number");
    }
    if (value <= 0) {
      throw new RangeError("radius must be > 0");
    }
    this._radius = value;
  }
  getVolume() {
    return (4 / 3) * Math.PI * (this._radius * this._radius * this._radius);
  }
}
class Cube extends Figure3D {
  constructor(edgeLength) {
    super("Cube");
    this.edgeLength = edgeLength;
  }
  get edgeLength() {
    return this._edgeLength;
  }
  set edgeLength(value) {
    if (typeof value !== "number") {
      throw new TypeError("Edge length must be number");
    }
    if (value <= 0) {
      throw new RangeError("Edge length must be > 0");
    }
    this._edgeLength = value;
  }
  getVolume() {
    return this._edgeLength * this._edgeLength * this._edgeLength;
  }
}
class Cylinder extends Figure3D {
  constructor(baseArea, cylinderHeight) {
    super("Cylinder");
    this.baseArea = baseArea
    this.cylinderHeight = cylinderHeight
  }
  get baseArea() {
    return this._baseArea;
  }
  set baseArea(value) {
    if (typeof value !== "number") {
      throw new TypeError("Base area must be number");
    }
    if (value <= 0) {
      throw new RangeError("Base area must be > 0");
    }
    this._baseArea = value;
  }
  get cylinderHeight() {
    return this._cylinderHeight;
  }
  set cylinderHeight(value) {
    if (typeof value !== "number") {
      throw new TypeError("Cylinder height must be number");
    }
    if (value <= 0) {
      throw new RangeError("Cylinder height must be > 0");
    }
    this._cylinderHeight = value;
  }
  getVolume() {
    return this._baseArea * this._cylinderHeight
  }
}

try {
  const sphere = new Sphere(1);
  console.log(sphere);
  const cube = new Cube(3);
  console.log(cube);
  const cylinder = new Cylinder(40, 7);
  console.log(cylinder);

  console.log(showVolume3DFigure(sphere));
  console.log(showVolume3DFigure(cube));
  console.log(showVolume3DFigure(cylinder));
} catch (error) {
  console.log(error);
}
