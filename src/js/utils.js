export function getRandomElement(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}