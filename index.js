// Code your solutions in this file

function writeCards(array, event) {
    let new_cards = []
    for (let i = 0; i < array.length; i++) {
        new_cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return new_cards;
}

function countDown(n) {
    while (n > 0) {
        console.log(n);
        n--
    }
    console.log(n)   ; 
}