const unsorted_array = [12, 2, 45, 23, 56, 8];
const new_element_2 = 20;
const new_unsorted_array = insertElement(unsorted_array, new_element_2);

console.log(unsorted_array, 'Array antes da inserção');
console.log(new_unsorted_array, 'Array depois da inserção');

function insertElement(arr: number[], element: number) {
    const new_unsorted_array = new Array(arr.length + 1);

    for (let i = 0; i< arr.length; i++) {
        new_unsorted_array[i] = arr[i];
    }

    new_unsorted_array[arr.length] = element;

    return new_unsorted_array;
}

