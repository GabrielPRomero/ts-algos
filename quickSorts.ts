// quick sort is a divide and conquer algorithm
// it works by partitioning the array into two parts
// one with elements less than the pivot
// one with elements greater than the pivot
// then it recursively calls itself on the two parts

export function quickSort(array: number[]): number[] {
  array = [...array];
  partition(array, 0, array.length);
  return array;
}

// partition works by finding the pivot
// then it swaps the pivot with the first element
// then it loops through the array and swaps the elements
// that are less than the pivot
// then it loops through the array and swaps the elements
// that are greater than the pivot
// then it returns the array


function partition(array: number[], start: number, end: number): void {
  const length = end - start;
  if (length <= 1) {
    return;
  }
  const pivotIndex = Math.floor(Math.random() * length) + start;
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
  const pivot = array[start];
  let pivotPlacement = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      pivotPlacement++;
      [array[i], array[pivotPlacement]] = [array[pivotPlacement], array[i]];
    }
  }

  if (pivotPlacement !== start) {
    [array[pivotPlacement], array[start]] = [
      array[start],
      array[pivotPlacement],
    ];
  }
  partition(array, start, pivotPlacement);
  partition(array, pivotPlacement + 1, end);
}

// test quickSort
// console.log(quickSort([4, 3, 2, 1]));
