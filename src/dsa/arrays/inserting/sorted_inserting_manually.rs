pub fn run() {
    let sorted_arr: Vec<i32> = vec![3, 6, 12, 23, 27, 32];
    let new_element: i32 = 18;

    println!("Array inicial: {:?}", sorted_arr);

    let new_sorted_arr: Vec<i32> = insert_sorted(sorted_arr, new_element);

    println!("Array final: {:?}", new_sorted_arr);
}

fn insert_sorted(arr: Vec<i32>, element: i32) -> Vec<i32> {
    let mut new_arr: Vec<i32> = Vec::with_capacity(arr.len() + 1);
    let mut inserted: bool = false;

    for &item in arr.iter() {
        if inserted == false && item > element {
            new_arr.push(element);
            inserted = true;
        }

        new_arr.push(item);
    }

    if inserted == false {
        new_arr.push(element);
    }

    new_arr
}
