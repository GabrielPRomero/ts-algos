// explains the bubble sort concept

export function bubbleSortConcept(array: number[]): number[] {
    array = [...array];
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                console.log(array);
            }
        }
    }
    return array;
}

// example:
// console.log(bubbleSortConcept([4,3,2,1]));
// [1,2,3,4]

// concept is pushing the largest number to the end of the array
// [ 4, 3, 2, 1 ]
// [ 3, 4, 2, 1 ]
// [ 3, 2, 4, 1 ]
// [ 3, 2, 1, 4 ]
// [ 2, 3, 1, 4 ]
// [ 2, 1, 3, 4 ]
// [ 1, 2, 3, 4 ]

// Idiomatic bubble sort implementation
export function bubbleSort(array: number[]): number[] {
    array = [...array];
    while (true) {
        let swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}

