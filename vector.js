class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(point) {
    return new Vec(this.x + point.x, this.y + point.y);
  }

  minus(point) {
    return new Vec(this.x - point.x, this.y - point.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
