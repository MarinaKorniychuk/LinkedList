const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null; 
        this._tail = null;
        this.length = 0; 
    }

    append(data) {
        if (this._head === null) { 
            this._head = new Node();
            this._head.data = data;
            this._tail = this._head;
            this.length++;
            return this;
        } 
        else {
            let temp = new Node();
            temp.data = data;
            temp.prev = this._tail;
            this._tail.next = temp;
            
            this._tail = temp;


            this.length++;
            return this;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    atNode(index) {
        if (index > this.length - 1) {
            return null;
        }
        let temp = this._head;
        let i = 0;
        while (i < index) {
            temp = temp.next;
            i++;
        }
        return temp;
    }

    at(index) {
        return this.atNode(index).data;
    }

    insertAt(index, data) {
        if (index > this.length - 1) {
            return this;
        }
        let temp = new Node();
        temp.data = data;
        let indexEl = this.atNode(index);

        indexEl.prev.next = temp;
        temp.prev = indexEl.prev;
        indexEl.prev = temp;
        temp.next = indexEl;
        this.length++;
        return this;
    }

    isEmpty() {
        if (this._head === null)
            return true;
        return false;
    }

    clear() {
        while (this.length > 0) {
            this.deleteAt(0)
        } 
    }

    deleteAt(index) {
        if (index > this.length - 1) {
            return this;
        }
        let indexEl = this.atNode(index);
        if (indexEl.prev)
            indexEl.prev.next = indexEl.next;
        if (indexEl.next)
            indexEl.next.prev = indexEl.prev;
        this.length--;
        indexEl = null;
        return this;
    }

    reverse() {}

    indexOf(data) {
        let temp = new Node();
        temp = this._head;
        let i = 0;
        while(temp !== null) {
            if (temp.data == data) {
                return i; 
            }
            i++;
            temp = temp.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
