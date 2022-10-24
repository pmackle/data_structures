class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head;
      this.size = 0;
    }
  
    add(data) {
      let newNode = new ListNode(data);
  
      if (this.head == null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
  
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
  
        currentNode.next = newNode;
      }
  
      this.size++;
    }
  
    insertAt(data, pos) {
      if (pos > this.size) {
        return console.log("Tried accessing an out of bounds index!");
      }
  
      let newNode = new ListNode(data);
  
      // Beginning of list
      if (pos === 0) {
        newNode.next = this.head;
        this.head = newNode;
      }
      // Accounts for middle and end of list
      else {
        let currentNode = this.head;
        let previousNode;
        for (let i = 1; i <= pos; i++) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
      }
  
      this.size++;
    }
  
    removeFrom(pos) {
      if (pos > this.size) {
        return console.log("Tried accessing an out of bounds index!");
      }
  
      let currentNode = this.head;
      let previousNode;
      if (pos === 0) {
        this.head = this.head.next;
        return;
      } else {
        let iterator = 0;
        // Keep iterating until currentNode becomes the
        // node we would like to remove
        while (iterator < pos) {
          iterator++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
  
      this.size--;
      return currentNode;
    }
  
    removeData(data) {
      let currentNode = this.head;
      let previousNode;
      while (currentNode.data !== data) {
        if (currentNode === null) {
          return console.log("Data not found");
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
  
      this.size--;
      return currentNode.data;
    }
  
    indexOf(data) {
      let currentNode = this.head;
      let idx = 0;
      while (currentNode.data !== data) {
        if (currentNode === null) {
          return console.log("Data not found");
        }
        currentNode = currentNode.next;
        idx++;
      }
      return idx;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    size() {
      return this.size;
    }
  
    printList() {
      let currentNode = this.head;
      let str = "";
      while (currentNode) {
        str += currentNode.data + " ";
        currentNode = currentNode.next;
      }
      console.log(str);
    }
  }
  