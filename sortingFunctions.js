const sortingFunctions = {
    mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = sortingFunctions.mergeSort(left);
    right = sortingFunctions.mergeSort(right);
    return sortingFunctions.merge(left, right, array);
    },

    merge(left, right, array) {
        let leftIndex = 0;
        let rightIndex = 0;
        let outputIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                array[outputIndex++] = left[leftIndex++];
            }
            else {
                array[outputIndex++] = right[rightIndex++];
            }
        }

        for (let i = leftIndex; i < left.length; i++) {
            array[outputIndex++] = left[i];
        }

        for (let i = rightIndex; i < right.length; i++) {
            array[outputIndex++] = right[i];
        }
        return array;
    },

    quickSort(array, start = 0, end = array.length) {
        if (start >= end) {
            return array;
        }
        const middle = sortingFunctions.partition(array, start, end);
        array = sortingFunctions.quickSort(array, start, middle);
        array = sortingFunctions.quickSort(array, middle + 1, end);
        return array;
    },

    partition(array, start, end) {
        const pivot = array[end - 1];
        let j = start;
        for (let i = start; i < end - 1; i++) {
            if (array[i] <= pivot) {
                sortingFunctions.swap(array, i, j);
                j++;
            }
        }
        sortingFunctions.swap(array, end-1, j);
        return j;
    },

    swap(array, i, j) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
};

module.exports = sortingFunctions;