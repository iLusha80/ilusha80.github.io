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