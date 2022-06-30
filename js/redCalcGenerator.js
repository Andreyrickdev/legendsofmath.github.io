const buttonRed = document.getElementsByClassName('lanes')[1];


buttonRed.addEventListener('click', calculo);

function calculo(){
    const card = document.getElementsByClassName('white-card')[0];
    const pCard = card.getElementsByTagName('p')[0];

    const num1 = Math.round(Math.random() * (9 - 2) + 2);
    const num2 = Math.round(Math.random() * (9 - 2) + 2);

    const signRandom = Math.round(Math.random() * (1 - 0) + 0);

    if(signRandom === 0){
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        pCard.innerText = `${num1} x ${num2}`;

    } else {
        console.log(`${num1} : ${num2} = ${num1 / num2}`);
        pCard.innerText = `${num1} : ${num2}`;
    }

    card.style.backgroundColor = "rgba(255,0,0, 0.349)";

}