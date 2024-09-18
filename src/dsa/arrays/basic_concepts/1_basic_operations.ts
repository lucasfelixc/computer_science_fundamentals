// 1. Inserção
const arrayInsertion: number[] = [1, 2, 3, 4];

// Inserir o índice 2 (inserir o número 3 entre 2 e 4)
arrayInsertion.splice(2, 0, 3) // O método splice pode ser usado para inserção

console.log(arrayInsertion, 'arrayInsertion');

// 2. Deleção
const arrayDeletion: number[] = [1, 2, 3, 4];

// Remover o índice 2 (deletar o número 3)
arrayDeletion.splice(2, 1) // Remove um elemento a partir do índice 2

console.log(arrayDeletion, 'arrayDeletion');

// 3. Acesso
const arrayAccess: number[] = [1, 2, 3, 4];

console.log(arrayAccess[2], 'arrayAccess'); // Acessar o índice 2

// 4. Modificação
const arrayModification: number[] = [1, 2, 3, 4];

// Modificar o valor no índice 2 (modificar o número 3 para 5)
arrayModification[2] = 5;

console.log(arrayModification, 'arrayModification');
