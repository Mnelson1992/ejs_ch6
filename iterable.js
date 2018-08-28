class Group {
  constructor() {
    this.members = [];
  }

  add(val) {
    if (!this.has(val)) {
      this.members.push(val);
    }
  }

  delete(val) {
    this.members = this.members.filter(v => v !== val);
  }

  has(val) {
    return this.members.includes(val);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.item = 0;
  }

  next() {
    if (this.item == this.group.array.length) {
      return { done: true };
    }

    let value = this.group.array[this.item];
    this.item++;

    return { value, done: false };
  }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
