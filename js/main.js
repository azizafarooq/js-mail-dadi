const numberGenerator = document.getElementById('button');
const result = document.getElementById('result');

numberGenerator.addEventListener('click', function(){
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    console.log(userNumber, computerNumber);

    if(userNumber > computerNumber){
        result.innerText = "Hai vinto!"
    } else if (userNumber < computerNumber){
        result.innerText = "Hai perso!"
    } else {
        result.innerText = "Hai pareggiato!"
    }
});



