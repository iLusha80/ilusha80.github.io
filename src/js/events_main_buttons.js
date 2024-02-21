var playButton = document.getElementById("playButton"); // Получаем ссылку на кнопку "Играть"
var mainBlock = document.getElementById("mainBlock");   // Получаем ссылку на главный блок


// Imports

function addButton() {
    // Создаем элементы для кнопок "Камень", "Ножницы" и "Бумага"
    var rockButton = document.createElement("button");
    rockButton.textContent = "Камень";
    rockButton.classList.add("btn", "btn-primary", "btn-block", "mb-2");

    var paperButton = document.createElement("button");
    paperButton.textContent = "Бумага";
    paperButton.classList.add("btn", "btn-primary", "btn-block", "mb-2");

    var scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Ножницы";
    scissorsButton.classList.add("btn", "btn-primary", "btn-block");

    // Добавляем созданные кнопки в главный блок
    mainBlock.appendChild(rockButton);
    mainBlock.appendChild(paperButton);
    mainBlock.appendChild(scissorsButton);

    rockButton.addEventListener("click", function() {
        playGame("Камень");
    });
    paperButton.addEventListener("click", function() {
        playGame("Бумага");
    });
    scissorsButton.addEventListener("click", function() {
        playGame("Ножницы");
    });
}

function getRandomElement(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
function playGame(result) {
    var list = ["Камень", "Ножницы", "Бумага"];
    var randomElement = getRandomElement(list);
    console.log("User->" + result);
    console.log("Comp->" + randomElement);
    if (randomElement == result) {
        console.log("Ничья!");
        alert("Ничья!");
    } else if (randomElement == "Камень" && result == "Ножницы") {
        console.log("Поражение!");
        alert("Поражение!");
    } else if (randomElement == "Камень" && result == "Бумага") {
        console.log("Победа!");
        alert("Победа!");
    } else if (randomElement == "Ножницы" && result == "Камень") {
        console.log("Победа!");
        alert("Победа!");
    } else if (randomElement == "Ножницы" && result == "Бумага") {
        console.log("Поражение!");
        alert("Поражение!");
    } else if (randomElement == "Бумага" && result == "Ножницы")  {
        console.log("Победа!");
        alert("Победа!");
    } else if (randomElement == "Бумага" && result == "Камень")  {
        console.log("Поражение!");
        alert("Поражение!")
    }
}

// Добавляем обработчик нажатия на кнопку "Играть"
playButton.addEventListener("click", addButton);
// rockButton.addEventListener("click", playGame("Камень"));