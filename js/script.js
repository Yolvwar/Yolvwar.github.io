//selection des éléments html
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const explication = document.querySelector(".explication");

start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
}

let que_count = 0;
let currentQuestionIndex = 1;
let userScore = 0;
let questionRemaining = questions.length-1;

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector(".total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        currentQuestionIndex++; 
        questionRemaining--;
        showQuetions(que_count); 
        queCounter(currentQuestionIndex); 
        next_btn.classList.remove("show"); 
        setTimeout(explication.style.display = 'none',2200);
    }else{
        showResult(); 
    }
}

function resetState(){
    while(option_list.firstChild){
        option_list.removeChild(option_list.firstChild);
    }
}

// prendre questions et options depuis tableau questions et explications
function showQuetions(index){
    

    resetState();
    const que_text = document.querySelector(".que_text");

    let currentQuestion = questions[index];
    let questionNum = currentQuestionIndex;
    que_text.innerHTML = `${questionNum}. ${currentQuestion.question}`;
    explication.innerHTML = `${currentQuestion.explication}`;

    currentQuestion.options.forEach(options=>{
        const btn = document.createElement('span');
        btn.innerHTML = options;
        btn.classList.add('option');
        option_list.appendChild(btn);
    });

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


//si utilsateur clique sur l'une des options
function optionSelected(answer){
    let userAns = answer.textContent; //récupérer l'option selectionner
    let correcAns = questions[que_count].answer; //récupérer la bonne réponse
    const allOptions = option_list.children.length; //prendre toutes les réponses possibles
    
    explication.style.display = 'block';
    if(userAns === correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
    }else{
        answer.classList.add("incorrect"); 

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent === correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
            }else{
                option_list.children[i].classList.add("disabled");
            }
        }
    }
    next_btn.classList.add("show"); 
}


function showResult(){
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    
    scoreText.innerHTML = `<span>Tu as eu ${userScore} sur ${questions.length}</span>`;

}

function queCounter(index){
    bottom_ques_counter.innerHTML = `${questionRemaining}`;  
}



const quit_quiz = result_box.querySelector(".buttons .quit");


// if quitQuiz button clicked
//quit_quiz.onclick = ()=>{
 //   window.location.reload(); 
//}