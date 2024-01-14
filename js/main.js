
const emailArray = ["azizafarooq@gmail.com", "esempioemail@gmail.com", "esempiodue@gmail.com"];
const checkEmail = document.getElementById("button-Email");
const resultEmail = document.getElementById("result-email");

checkEmail.addEventListener('click', function(){
    const email = document.getElementById("email").value;
    let emailValida = false;

    for (let i = 0; i < emailArray.length; i++){
        if (emailArray[i] === email){
            emailValida = true;
        }
    }

    if (emailValida) {
        resultEmail.innerText = "La mail inserita è valida";
    } else {
        resultEmail.innerText = "La mail inserita non è valida";
    }
});

const numberGenerator = document.getElementById('button');
const resultGame = document.getElementById('result-game');
const userCard = document.getElementById('user-card');
const computerCard = document.getElementById('computer-card');

numberGenerator.addEventListener('click', function(){
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;

    userCard.innerText= "Il tuo numero generato è: " + userNumber;
    computerCard.innerText= "Quello del computer è: " + computerNumber;

    console.log(userNumber, computerNumber);

    if(userNumber > computerNumber){
        resultGame.innerText = "Hai vinto!"
    } else if (userNumber < computerNumber){
        resultGame.innerText = "Hai perso!"
    } else {
        resultGame.innerText = "Hai pareggiato!"
    }
});