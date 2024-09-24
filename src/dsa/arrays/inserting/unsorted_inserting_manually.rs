pub fn run() {
    let unsorted_array: Vec<i32> = vec![8, 12, 2, 34, 26];
    let new_element: i32 = 10;

    println!("Array inicial: {:?}", unsorted_array);

    let new_unsorted_array: Vec<i32> = insert_element(unsorted_array, new_element);

    println!("Array depois da inserção: {:?}", new_unsorted_array);
}

fn insert_element(arr: Vec<i32>, element: i32) -> Vec<i32> {
    let mut new_arr: Vec<i32> = Vec::with_capacity(arr.len() + 1);

    for &item in arr.iter() {
        new_arr.push(item);
    }

    new_arr.push(element);

    new_arr
}
