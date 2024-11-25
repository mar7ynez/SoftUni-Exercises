function createSortedList() {

    let specialObj = {
        collection: [],
        size: 0,
        add(element) {
            this.collection.push(element);
            this.size++;
            this.collection.sort((a, b) => a - b);
        },
        remove(index) {
            if (checkValidIndex(index, this.collection)) {
                this.collection.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (checkValidIndex(index, this.collection)) {
                return this.collection[index];
            }
        },
    }
    return specialObj;

    function checkValidIndex(index, collection) {
        return index < collection.length && index >= 0;
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));