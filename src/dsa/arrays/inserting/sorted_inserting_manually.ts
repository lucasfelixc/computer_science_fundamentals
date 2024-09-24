const sorted_arr = [10, 12, 23, 34, 45];
const new_element_3 = 25;
const new_sorted_arr = insertElementSorted(sorted_arr, new_element_3);

console.log(sorted_arr, 'Array antes da inserção');
console.log(new_sorted_arr, 'Array depois da inserção');

function insertElementSorted(arr: number[], element: number): number[] {
    const new_arr = new Array(arr.length + 1);
    let inserted = false;

    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        if (inserted === false && arr[i] > element) {
            new_arr[j] = element;
            inserted = true;
            j++;
        }

        new_arr[j] = arr[i];
    }

    if (inserted === false) {
        new_arr[arr.length] = element;
    }

    return new_arr;
}