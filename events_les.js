function logButtonClick()   {
    let textToAdd = "Кнопка была нажата!\n";
    console.log(textToAdd);
    text.value += textToAdd;
}

var button = document.getElementById("myButton");
var text = document.getElementById("outputTextarea");
button.addEventListener("click", logButtonClick);