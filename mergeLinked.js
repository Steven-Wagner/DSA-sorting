const LinkedList = require('./linkedList');

function mergeLinkedSort(linkedList) {
    console.log('first', linkedList)
    if (size(linkedList) <= 2) {
        return linkedList;
    }

    const middle = Math.floor(size(linkedList) / 2);
    console.log(middle)
    // let left = array.slice(0, middle);

        let left = allNodesToLeft(linkedList, middle);
        let right = allNodesToRight(linkedList, middle);

    left = mergeLinkedSort(left);
    right = mergeLinkedSort(right);
    return merge(left, right, linkedList);
}

function merge(left, right, linkedList) {
    console.log('rightin merge', right);
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < size(left) && rightIndex < size(right)) {
        if (left.getValueByIndex(leftIndex) < right.getValueByIndex(rightIndex)) {
            console.log('leftindexvaleu', left.getValueByIndex(leftIndex))
            linkedList.insertAt(left.getValueByIndex(leftIndex++), outputIndex++)
            // array[outputIndex++] = left[leftIndex++];
        }
        else {
            linkedList.insertAt(right.getValueByIndex(rightIndex++), outputIndex++)
            // array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < size(left); i++) {
        linkedList.insertAt(outputIndex++, left.getValueByIndex(i))
        // array[outputIndex++] = left[i];
    }

    console.log('sizeright', size(right))
    console.log('rightin merge', right);
    for (let i = rightIndex; i < size(right); i++) {
        console.log(size(linkedList))
        console.log('rightIndex', rightIndex)
        linkedList.insertAt(outputIndex++, right.getValueByIndex(i))
        // array[outputIndex++] = right[i];
    }
    return linkedList;
}

function size(listClass) {
    let currNode = listClass.head;
    let size = 0;
    while (currNode !== null) {
        size++;
        currNode = currNode.next;
    }
    return size;
}

function display(listClass) {
    let currNode = listClass.head;
    while (currNode !== null) {
        console.log(listClass.find(currNode.value))
        currNode = currNode.next
    }
}

function allNodesToLeft(linkedList, middle) {
    const newLinkedList = new LinkedList()
    console.log('headvallue0', linkedList)
    newLinkedList.insertFirst(linkedList.head.value)
    
    for (let i=1; i<middle; i++) {
        newLinkedList.insertLast(linkedList.getValueByIndex(i))
    }

    return newLinkedList;
}
function allNodesToRight(linkedList, middle) {
    const newLinkedList = new LinkedList()
    newLinkedList.insertFirst(linkedList.getValueByIndex(middle))
    
    for (let i=middle+1; i<size(linkedList); i++) {
        newLinkedList.insertLast(linkedList.getValueByIndex(i))
    }

    return newLinkedList;
}

module.exports = mergeLinkedSort;