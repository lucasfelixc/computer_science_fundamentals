pub fn run() {
    let mut arr: Vec<i32> = vec![30, 23, 4, 56, 2, 12];
    println!("Array inicial: {:?}", arr);

    let new_element: i32 = 10;

    arr.push(new_element);
    println!("Array depois da inserção: {:?}", arr);
}
