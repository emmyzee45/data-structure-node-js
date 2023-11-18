class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if(!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;
        this.size++;
        return value;
    }
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
        return value;
    }
    insert(value, index) {
        if(index < 0 | index >= this.size) {
            return null;
        }
        if(index === 0) {
            return this.prepend(value)
        }
        const node = new Node(value)
        let prev = this.head;
        for(let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
        return value;

    }
    search(value) {
        if(this.isEmpty()) {
            return -1;
        }
        let count = 0;
        let prev = this.head;
        while(prev) {
            if(prev.value === value) {
                return count
            }
            prev = prev.next;
            count++;
        }

        return -1;
    }
    removeFrom(index) {
        if(index < 0 || index >= this.size) return null
        let removeNode;
        if(index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }
    removeValue(value) {
        if(this.isEmpty()) return null;
        let removeNode;
        if(this.head.value === value) {
            removeNode = this.head;
            this.head = this.head.next;
            this.size--;
            return value
        }
        let prev = this.head;
        while(prev.next && prev.next.value !== value) {
            prev = prev.next;
        }
        if(prev.next) {
            removeNode = prev.next;
            prev.next = removeNode.next;
            this.size--;
            return value;
        }
        return null;
    }
    print() {
        if(this.isEmpty()) {
            console.log("List is empty")
        } else {
            let current = this.head;
            let values = "";
            while(current) {
                values += `${current.value} `
                current = current.next;
            }
            console.log(values)
        }
    }
}
const list = new List();
console.log(list.isEmpty())
list.append(3)
list.prepend(2);
list.append(4);
console.log(list.isEmpty())
list.prepend(1)
list.insert(0,2)
console.log(list.getSize())
list.print()
list.removeValue(1)
list.print()