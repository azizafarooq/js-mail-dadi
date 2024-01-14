const numberGenerator = document.getElementById('button');
const result = document.getElementById('result');
const userCard = document.getElementById('user-card');
const computerCard = document.getElementById('computer-card');

numberGenerator.addEventListener('click', function(){
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    userCard.innerText= "Il tuo numero generato è: " + userNumber;
    computerCard.innerText= "Quello computer è: " + computerNumber;
    
    console.log(userNumber, computerNumber);

    if(userNumber > computerNumber){
        result.innerText = "Hai vinto!"
    } else if (userNumber < computerNumber){
        result.innerText = "Hai perso!"
    } else {
        result.innerText = "Hai pareggiato!"
    }
});



