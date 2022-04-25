// insertions sort is a simple sorting algorithm
// it works by comparing the current element with the next element
// if the current element is greater than the next element
// it swaps the two elements
// then it moves on to the next element

export function insertionSort(array: number[]): number[] {
    array = [...array];
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

// test the insertion sort
// console.log(insertionSort([4, 3, 2, 1]));