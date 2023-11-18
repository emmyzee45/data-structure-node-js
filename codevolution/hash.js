class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
            console.log(total)
        }
        console.log(total%this.size)
        return total % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;
        let bucket = this.table[index];
        if(!bucket) {
            // bucket = [[key, value]];
            this.table[index] = [[key, value]]
        } else {
            const sameBucket = bucket.find((item) => item[0] === key);
            if(sameBucket) {
                sameBucket[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKey = bucket.find((item) => item[0] === key); 
            if(sameKey) {
                return sameKey[1]
            }
        }
        return undefined;
        // return this.table[index];
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
        // this.table[index] = undefined;
    }
    display() {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50);
// table.hash("mane", "James")
table.set("name", "Bruse");
table.set("color", "Red")
table.set("name", "James");
table.set("mane", "Jaffet")
table.set
table.set("age", 25)
table.display()