var number= 15;

if (number % 2 == 0){
    console.log('Четное!');
} else {
    console.log('Нечетное!');
}

for (var i = 0; i < 5; i++){
    console.log(i);
}

console.log('---------WHILE----------')

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log('--------DO----------')

i = 0;
do {
    console.log(i);
    i++;
}while (i < 5);

console.log('---------------------');
console.log('-------Массивы-------');
console.log('---------------------');

var num_mas = [1, 2, 3, 4, 5];
console.log(num_mas[0]);
console.log(num_mas[3]);
console.log(num_mas[-1]); //TODO как взять последний элемент массива?
num_mas.push(6);
console.log(num_mas[5]);

console.log('---------------------');
console.log('-------Функции-------');
console.log('---------------------');

function greet(name) {
    console.log("Hello, " + name + "!"); // TODO Узнать как форматировать строки
}

greet("Боби Билибс");
console.log('---------------------');
console.log('-------Возврат-------');
console.log('---------------------');

function add(a, b) {
    return a + b;
}

var result = add(3, 5);
console.log(result)
