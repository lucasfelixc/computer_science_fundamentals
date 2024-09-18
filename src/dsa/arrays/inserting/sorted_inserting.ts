const sorted_array: number[] = [2, 8, 12, 18, 23, 56];
const new_element: number = 20;

const index = sorted_array.findIndex((element) => element > new_element);

console.log(sorted_array, 'Array antes da inserção');

if (index === -1) {
    sorted_array.push(new_element);
} else {
    sorted_array.splice(index, 0, new_element);
}

console.log(sorted_array, 'Array depois da inserção');