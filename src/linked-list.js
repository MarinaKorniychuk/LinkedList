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
        if (this._head)
            return this._head.data;
        else
            return null;
    }

    tail() {
        if (this._tail)
            return this._tail.data;
        else
            return null;
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
        return this;
    }

    deleteAt(index) {
        if (index > this.length - 1) {
            return this;
        }
        let indexEl = this.atNode(index);
        if (indexEl.prev) {
            indexEl.prev.next = indexEl.next;
        }
        else {
            this._head = this._head.next;
        }
        
        if (indexEl.next) {
            indexEl.next.prev = indexEl.prev;
        }
        else {
            this._tail = this._tail.prev;
        }

        this.length--;
        indexEl = null;
        return this;
    }

    reverse() {
        var temp = this._head;
        var next;
        while (temp !== null) {
            next = temp.next;
            var prevCopy = temp.prev;
            temp.prev = temp.next;
            temp.next = prevCopy;
            temp = next;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let temp = this._head;
        let i = 0;
        while (temp !== null) {
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
