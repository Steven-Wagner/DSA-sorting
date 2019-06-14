const sortingFunctions = require('./sortingFunctions');
const mergeLinkedSort = require('./mergeLinked')
const LinkedList = require('./linkedList')

console.log(sortingFunctions.mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40], 3));
console.log(sortingFunctions.mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40], 4));
console.log(sortingFunctions.mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40], 5));

//quicksort

//pivot point could be 14 or 17

//pivot is last [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]

//pivot first [ 14, 13, 10, 3, 9, 12, 15, 16, 19, 17 ] How would I fix this?

const data = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ]

const newData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

// console.log(sortingFunctions.quickSort(newData));
// console.log(sortingFunctions.mergeSort(newData));

const linkedListToSort = new LinkedList;

const initalItems = [2,1,5,10,8,4,7];


initalItems.forEach(item => {
    linkedListToSort.insertLast(item)
});

console.log(size(linkedListToSort))

console.log(linkedListToSort.getValueByIndex(1));

function size(listClass) {
    let currNode = listClass.head;
    let size = 0;
    while (currNode !== null) {
        size++;
        currNode = currNode.next;
    }
    return size;
}

console.log(mergeLinkedSort(linkedListToSort));