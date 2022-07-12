const buttonRed = document.getElementsByClassName('lanes')[1];


buttonRed.addEventListener('click', calculo);

function calculo(){

    function selectCard () {
        const card = document.getElementsByClassName('white-card')[0];
        return card;
    }

    function selectPInCard () {
        const card = selectCard();

        const pCard = card.getElementsByTagName('p')[0];
        return pCard;
    }

    function num1RandomGenerated (){
        const num1 = Math.round(Math.random() * (9 - 2) + 2);
        return num1;
    }

    function num2RandomGenerated () {
        const num2 = Math.round(Math.random() * (9 - 2) + 2);
        return num2;
    }

    function yourSignFromMathGenerated () {
        const sign = Math.round(Math.random() * (1 - 0) + 0);
        return sign;
    }

    function definingBackgroundColor () {
        const card = selectCard();

        card.style.backgroundColor = "rgba(255,0,0, 0.349)";
    }
    definingBackgroundColor();

    function formatingAnswers () {
        const boxOfAnswer = document.getElementsByClassName('yourAnswer');
        const answer = document.getElementsByClassName('yourAnswerWriting');

        for (let i of boxOfAnswer){
            i.style.backgroundColor = "initial";
            i.style.borderRadius = "initial";
        }

        for (let i of answer){
            i.classList.remove('wrong');
            i.classList.remove('correct');
        }

    }
    formatingAnswers();

    function createdYourCalc() {

    const pCard = selectPInCard();
    const sign = yourSignFromMathGenerated();
    const num1 = num1RandomGenerated();
    const num2 = num2RandomGenerated();

        if(sign === 0){
            pCard.innerText = `${num1} x ${num2}`;
            questionRed(num1 * num2);
        }
    }
    createdYourCalc();

}

function questionRed (result) {

    function selectedYourAnswers () {
        const answers = document.body.getElementsByClassName('yourAnswerWriting');
        return answers;
    }

    const resultOnPositionRandom = Math.round(Math.random() * (2 - 0) + 0);

    function resetAllValueAnswers () {
        
        const answers = selectedYourAnswers();

        for (let answer of answers){
            answer.innerHTML = 0;
        }

    }
    resetAllValueAnswers();

    function puttingResultOnPositionRandom () {

        const answers = selectedYourAnswers();

        answers[resultOnPositionRandom].innerHTML = result;

        console.log('resultado da carta é:',result);
    }
    puttingResultOnPositionRandom();

    function definingValuesForAnswers () {

        const answers = selectedYourAnswers();
        const [answer0, answer1, answer2] = answers;
        
        function answerPosition1 () {

            if(resultOnPositionRandom === 0){
        
                let numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom2 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom4 = Math.round(Math.random() * (9 - 2) + 2);

                let sum1 = numRandom1 * numRandom2;
                let sum2 = numRandom3 * numRandom4;

                if (sum1 == result) {
                    numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                    sum1 = numRandom1 * numRandom2;
                }

                if (sum2 == result) { 
                    numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                    sum2 = numRandom3 * numRandom4;
                }

                answer1.innerHTML = sum1;
                answer2.innerHTML = sum2;

            }
        }

        function answerPosition2 () {
          
            if(resultOnPositionRandom === 1){
        
                let numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom2 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom4 = Math.round(Math.random() * (9 - 2) + 2);

                let sum1 = numRandom1 * numRandom2;
                let sum2 = numRandom3 * numRandom4;

                if (sum1 == result) {
                    numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                    sum1 = numRandom1 * numRandom2;
                }

                if (sum2 == result) { 
                    numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                    sum2 = numRandom3 * numRandom4;
                }

                answer0.innerHTML = sum1;
                answer2.innerHTML = sum2;

            }
        }
    
        function answerPosition3 () {

            if(resultOnPositionRandom === 2){
        
                let numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom2 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                let numRandom4 = Math.round(Math.random() * (9 - 2) + 2);

                let sum1 = numRandom1 * numRandom2;
                let sum2 = numRandom3 * numRandom4;

                if (sum1 == result) {
                    numRandom1 = Math.round(Math.random() * (9 - 2) + 2);
                    sum1 = numRandom1 * numRandom2;
                }

                if (sum2 == result) { 
                    numRandom3 = Math.round(Math.random() * (9 - 2) + 2);
                    sum2 = numRandom3 * numRandom4;
                }

                answer0.innerHTML = sum1;
                answer1.innerHTML = sum2;

            }
        }

        answerPosition1();
        answerPosition2();
        answerPosition3();

        function correctOrWrong () {

            const boxOfAnswer = document.getElementsByClassName('yourAnswer');

            boxOfAnswer[0].addEventListener('click', buttonAnswer0);
            
            function buttonAnswer0 () {
                if( 0 == resultOnPositionRandom){
                    answer0.classList.add('correct');
                    answer0.classList.remove('wrong');
                    boxOfAnswer[0].style.backgroundColor = "#2ac264";
                    boxOfAnswer[0].style.borderRadius = "10px";
                } else{
                    answer0.classList.add('wrong');
                    answer0.classList.remove('correct');
                    boxOfAnswer[0].style.backgroundColor = "#bd3026";
                    boxOfAnswer[0].style.borderRadius = "10px";
                }

            }

            boxOfAnswer[1].addEventListener('click', buttonAnswer1);

            function buttonAnswer1 () {
                if( 1 == resultOnPositionRandom){
                    answer1.classList.add('correct');
                    answer1.classList.remove('wrong');
                    boxOfAnswer[1].style.backgroundColor = "#2ac264";
                    boxOfAnswer[1].style.borderRadius = "10px";
                } else{
                    answer1.classList.add('wrong');
                    answer1.classList.remove('correct');
                    boxOfAnswer[1].style.backgroundColor = "#bd3026";
                    boxOfAnswer[1].style.borderRadius = "10px";
                }

            }

            boxOfAnswer[2].addEventListener('click', buttonAnswer2);

            function buttonAnswer2 () {
                if( 2 == resultOnPositionRandom){
                    answer2.classList.add('correct');
                    answer2.classList.remove('wrong');
                    boxOfAnswer[2].style.backgroundColor = "#2ac264";
                    boxOfAnswer[2].style.borderRadius = "10px";
                } else{
                    answer2.classList.add('wrong');
                    answer2.classList.remove('correct');
                    boxOfAnswer[2].style.backgroundColor = "#bd3026";
                    boxOfAnswer[2].style.borderRadius = "10px";
                }

            }

        }
        correctOrWrong();

    }
    definingValuesForAnswers();

}