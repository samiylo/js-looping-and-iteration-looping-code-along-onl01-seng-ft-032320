// Code your solutions in this file


function writeCards(names, event) {

    let messeges = []
    for (let i = 0; i < names.length; i++) {
        messeges.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messeges;
}

function countDown(int) {
    
    while (int > 0 ) {
        console.log(int);
        int--;
    }
    console.log(int)
}
