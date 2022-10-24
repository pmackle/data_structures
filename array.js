class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    // Length
    // Get
    // Find
    // Insert
    // Remove
  
    length() {
      return this.length;
    }
  
    get(pos) {
      if (pos >= this.length) {
        return console.log("Tried accessing an out of bounds index!");
      }
  
      return this.data[pos];
    }
  
    find(item) {
      for (let i = 0; i < this.length; i++) {
        if (this.data[i] === item) return i;
      }
      return console.log("Item not found");
    }
  
    insert(item, pos) {
      if (pos > this.length) {
        return console.log("Tried accessing an out of bounds index!");
      }
  
      this.length++;
  
      for (let i = this.length - 1; i > pos; i--) {
        this.data[i] = this.data[i - 1];
      }
  
      this.data[pos] = item;
    }
  
    remove(pos) {
      if (pos >= this.length) {
        return console.log("Tried accessing an out of bounds index!");
      }
  
      for (let i = pos; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
  
      this.length--;
    }
  }
  