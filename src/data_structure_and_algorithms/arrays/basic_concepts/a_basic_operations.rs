pub fn run() {
    let mut array: Vec<i32> = vec![1, 2, 4, 5];

    println!("Array inicial: {:?}", array);

    array.insert(2, 3);

    println!("Inserção: {:?}", array);

    array.remove(2);

    println!("Remoção: {:?}", array);

    println!("Acesso: {}", array[2]);

    array[0] = 5;

    println!("Modificação: {:?}", array);
}
