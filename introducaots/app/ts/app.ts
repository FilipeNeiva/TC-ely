let nome : string = "Type Script"
console.log("Hello, " + nome);

function dobra(x : number) : number {
    return x*2;
}

let ab = (numero: number) => numero * 2;

console.log(ab(3));

let numeros: number[] = [1, 2, 3, 4];
numeros = numeros.map((numero: number) => numero * 2);
console.log(numeros);

let a = 10;

let b: any = 10;
b = 2;

let c: number = 10;
c = 2;

function soma(x: number, y?: any): number {
    return x + y
}

console.log(soma(1));

enum estados {"PI", "CE", "MA"};

for (let estado in estados){
    console.log(estado);
}


function exibir(...frases: string[]): void{
    
    let frase_completa = "";
    
    for(let frase of frases){
        frase_completa += frase;
    }

    console.log(frase_completa)
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");

let arrow = () => console.log('Olá');

arrow();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let arrays = array.filter(x => x%2==0)

console.log(arrays)