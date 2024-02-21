// function getTelegramData() {
//     let tg = window.Telegram.WebApp;
//     let data = tg.initDataUnsafe;
//     console.log(data);
//     console.log(data.chat.id);
//     console.log(data.message.text);
//     console.log('--------------------------------')
// }
//
// document.addEventListener("DOMContentLoaded", getTelegramData);
// let tg = window.Telegram.WebApp;

function onDOMReady(callback) {
    document.addEventListener("DOMContentLoaded", callback);
}

function onPageLoad() {
    // Получаем элемент textarea
    const outputTextArea = document.getElementById("outputText");
    let tg = window.Telegram.WebApp;
    let data = tg.initDataUnsafe;
    // Текст, который мы хотим отобразить в textarea
    const initialText = data.toString();

    // Устанавливаем текст в textarea
    outputTextArea.value = initialText +  "\n2." + tg.initData + "\n3." + tg.initDataUnsafe  + "\n4.";
}

// Вызываем функцию при загрузке DOM
onDOMReady(onPageLoad);