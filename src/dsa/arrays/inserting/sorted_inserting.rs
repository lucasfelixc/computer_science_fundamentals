pub fn run() {
    let mut arr: Vec<i32> = vec![3, 12, 23, 45, 56, 67];
    let new_element: i32 = 34;

    println!("Array inicial: {:?}", arr);

    let position = arr.iter().position(|&x| x > new_element);

    match position {
        Some(index) => arr.insert(index, new_element),
        None => arr.push(new_element),
    }

    println!("Array final: {:?}", arr);
}
