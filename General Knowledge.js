//Update only questions and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically
//Read only!!!
//Tomiwa Olasupo
//June 29th 2022
//08076312290



var myVar;

function myloader() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.querySelector(".lds-ellipsis").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//Calling the required sections

const container = document.querySelector(".container");
const WelcomeBox = document.querySelector(".welcome");
const ButtonStart = document.querySelector(".buttonStart");
const questionParagraph = document.querySelector (".question");
const answersContainer = document.querySelector(".answers");
const questionsSection = document.querySelector(".questions")
const scoreSpan =  document.querySelector("#score");
const buttonNext = document.querySelector(".button-next");
const quizStopElement = document.querySelector(".container");
const Submit = document.querySelector(".submit-btn")



//Question and options array
const questions = [


    {question: ' How many local Governments do we have in Nigeria?',
    answers: [{text: '36', isAnswer:false}, {text: '74', isAnswer:false}, {text: '747', isAnswer:false},
     {text: '774', isAnswer:true}] 
    },

    {question: 'What is the hardest natural substance on Earth?',
    answers: [{text: 'Graphite', isAnswer:false}, {text: 'Lead', isAnswer:false}, {text: 'Cryolite', isAnswer:false},
     {text: 'Diamond', isAnswer:true}] 
    },

  


    {question: '... is the biggest planet in the solar system',
    answers: [{text: 'Earth', isAnswer:false}, {text: 'Mecury', isAnswer:false}, {text: 'Jupiter', isAnswer:true},
     {text: 'Saturn', isAnswer:false}] 
    },

    {question: ' An election which is conducted to fill a vacant seat in a legislature is called a',
    answers: [{text: 'By- election', isAnswer:true}, {text: 'General election', isAnswer:false}, {text: ' Referendum', isAnswer:false},
     {text: ' plebiscite', isAnswer:false}] 
    },

    {question: 'DNA stands for ....',
    answers: [{text: 'Deoxyribonucleus Acid', isAnswer:false}, {text: 'Deoxyribonuclear Acid', isAnswer:false}, {text: 'Deoxyribosome Acid', isAnswer:false},
     {text: 'Deoxyribonucleic Acid', isAnswer:true}] 
    },
    
    {question: ' One of the functions of the Ministry of external affairs is the',
    answers: [{text: ' Deportation of illegal aliens', isAnswer:false}, {text: 'Issuance of Passports', isAnswer:false}, {text: 'Defence of the Country Borders', isAnswer:false},
     {text: ' Promotion of national interests', isAnswer:true}] 
    },


    {question: 'When was the Nigerian Naira introduced?',
    answers: [{text: '1st January 1974', isAnswer:false}, {text: '1st January 1983', isAnswer:false}, {text: '1st January 1973', isAnswer:true},
     {text: '1st January 1873', isAnswer:false}] 
    },

    {question: 'What is the largest continent in the world?',
    answers: [{text: 'Asia', isAnswer:true}, {text: 'North America', isAnswer:false}, {text: 'Australia', isAnswer:false},
     {text: 'Europe', isAnswer:false}] 
    },


    {question: '..... is the study of navigation through air or space',
    answers: [{text: 'Aerology', isAnswer:false}, {text: 'Aeronatics', isAnswer:false}, {text: 'Aerodynamics', isAnswer:true},
     {text: 'Aerolithology', isAnswer:false}] 
    },

   

    {question: 'How many bones are in the human body ?',
    answers: [{text: '306', isAnswer:false}, {text: '206', isAnswer:true}, {text: '106', isAnswer:false},
     {text: '64', isAnswer:false}] 
    },

    {question: "Which is the main gas that makes up the Earth's atmosphere ",
    answers: [{text: 'Oxygen', isAnswer:false}, {text: 'Carbonmonoxide', isAnswer:false}, {text: 'Nitrogen', isAnswer:true},
     {text: 'Ammonia gas', isAnswer:false}] 
    },

    {question: 'Laws made by State government are known as',
    answers: [{text: 'Bills', isAnswer:false}, {text: 'Bye-law', isAnswer:false}, {text: 'Acts', isAnswer:false},
     {text: 'Edicts', isAnswer:true}] 
    },



    {question: '... is a material which do not conduct electrical charge',
    answers: [{text: 'Conductor', isAnswer:false}, {text: 'Inductor', isAnswer:false}, {text: 'Insulator', isAnswer:true},
     {text: 'Capacitor', isAnswer:false}] 
    },

    
    {question: ' Nigeria is divided into how many geopolitical zones?',
    answers: [{text: 'Seven', isAnswer:false}, {text: 'Six', isAnswer:true}, {text: 'Five', isAnswer:false},
     {text: 'Four', isAnswer:false}] 
    },

    {question: 'Which oath of ethics taken by doctors is named after an ancient Greek physician',
    answers: [{text: 'Hipocratic Oath', isAnswer:false}, {text: 'Hippocratic Oath', isAnswer:true}, {text: 'Allegiance of honesty', isAnswer:false},
     {text: 'No answer', isAnswer:false}] 
    },

    {question: 'At what temperature is Celsius and Fahrenheit equal',
    answers: [{text: '-10', isAnswer:false}, {text: '-20', isAnswer:false}, {text: '-40', isAnswer:true},
     {text: '-60', isAnswer:false}] 
    },

    
    {question: ' Who formed the first political party in Nigeria?',
    answers: [{text: 'Abdulahi Adamu', isAnswer:false}, {text: 'Obafemi Awolowo', isAnswer:false}, {text: ' Herbert Macauly', isAnswer:false},
     {text: 'Nelson Mandela', isAnswer:true}] 
    },

    {question: 'The number of protons found in the nucleus of an atom is known as ?',
    answers: [{text: 'Atomic Number', isAnswer:true}, {text: 'Mass Number', isAnswer:false}, {text: 'Nucleon number', isAnswer:false},
     {text: 'No of moles', isAnswer:false}] 
    },

    {question: 'Who is the current Chief Justice of Nigeria?',
    answers: [{text: 'Ibrahim Tanko', isAnswer:false}, {text: 'Olukayode Ariwoola', isAnswer:true}, {text: 'Tukor Buratai', isAnswer:false},
     {text: 'None of the above', isAnswer:false}] 
    },

    {question: 'How many countries constitute the Economic Community of West African States',
    answers: [{text: '12', isAnswer:false}, {text: '14', isAnswer:false}, {text: '16', isAnswer:true},
     {text: '18', isAnswer:false}] 
    },

    {question: 'How long does it take the earth to complete one revolution?',
    answers: [{text: '24 hours', isAnswer:false}, {text: '30 days', isAnswer:false}, {text: '365 days', isAnswer:true},
     {text: '60 minutes', isAnswer:false}] 
    },

    {question: 'How Senators make up the national assembly of Nigeria?',
    answers: [{text: '774 senators', isAnswer:false}, {text: '109 senators', isAnswer:true}, {text: '36 Senators', isAnswer:false},
     {text: '45 Senators', isAnswer:false}] 
    },

    {question: 'Who invented light bulb',
    answers: [{text: 'Michael Faraday', isAnswer:false}, {text: 'Charles Darwin', isAnswer:false}, {text: 'Thomas Edison', isAnswer:true},
     {text: 'Karl Benz', isAnswer:false}] 
    },

    {question: '...is the hottest region in the world',
    answers: [{text: 'Savanna region', isAnswer:false}, {text: 'Swamp region', isAnswer:false}, {text: 'Forest region', isAnswer:false},
     {text: 'Sahara desert', isAnswer:true}] 
    },

    {question: 'According to the Marxist theory, those who live by selling labour are called?',
    answers: [{text: 'Proletariats', isAnswer:true}, {text: 'Feudal lords', isAnswer:false}, {text: 'Slaves', isAnswer:false},
     {text: 'Bourgeoise', isAnswer:false}] 
    },



  












    

    
]

 
  

let questionIndex = 0;

//To display the questions rrandomly
let firstQuestion =  Math.floor(Math.random() * questions.length)
let nextQuestion = firstQuestion

//Calling the variable for score and score when converted into percent
let score = 0
let percent = 0

//Function to make the quiz container overwrite the welcome page
ButtonStart.addEventListener('click', ()=> {
    WelcomeBox.style.display = 'none'
    container.style.display = 'block';

    //Calling function to display question
    oneQuestion(firstQuestion)
    
    //Calling function to display timer
    startcountdown()


    //Calling function to show the question progress
    showProgress()


})




//Function to cycle through the questions and options array
const oneQuestion = (index) =>{
    const question = questions[index]
    questionParagraph.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answers-button')
        button.append(answer.text) 
        answersContainer.appendChild(button)
        button.dataset.isCorrect = answer.isAnswer
        button.addEventListener('click', checkAnswer)
       
       
    })

}

//Function to check the correct answer
const checkAnswer = (e) =>{
   
    const allAnswers = document.querySelectorAll('.answers-button')
    const answerBoolean = e.target.dataset.isCorrect
    if(answerBoolean === 'true'){

        //Append a style to the button when an option is correct
        e.target.classList.add('valid')

        //Increase the score when the boolean return true
        score ++

        //Convert score to percent
        percent = (score / questions.length) * 100

        percent = Math.ceil(percent);
        scoreSpan.textContent = percent
       
    }

    //Append the same style to the option button even when the option selected is not correct
    else{
        e.target.classList.add('valid')
    }

    //Function to disable all other options after one option has been selected
 allAnswers.forEach(el => {
    el.disabled = true 
 })
}



//Question progess function
let currentQuestionNumber;
function showProgress() {
    currentQuestionNumber = questionIndex + 1;
    let progressElement = document.getElementById("progress");

    progressElement.textContent = 
`Question ${currentQuestionNumber} of ${questions.length} `;
 
    }
   

   //the next button function
buttonNext.addEventListener('click', () => {

    //Display another random question
    nextQuestion --

    //Show question progress on click to the next question and increment it
    questionIndex ++
    showProgress()

    //Change the next button to Submit button at the last index question
    if(currentQuestionNumber === questions.length){
        buttonNext.style.display = 'none'
        Submit.style.width = '75%'
        Submit.style.textTransform = 'uppercase'
    }

  
    
   

  //Display another random question on reaching index 0
    if(nextQuestion < 0){
        nextQuestion = questions.length + nextQuestion
    }

   

   
    //Clearing the former questions and option to make way for the next question
    questionParagraph.textContent = ''
    answersContainer.textContent = ''

    //  Display next question
    oneQuestion(nextQuestion)
   
   
    




} 
)

// Function to submit quiz
Submit.addEventListener('click', () => {
    document.querySelector('.lds-roller').style.display = 'block'
    clearInterval(quizTimer)
    document.querySelector(".container").innerHTML = `<p style="color: white;" class="text-lead text-center">Processing result...<br>Please wait..</p>`
   
    setTimeout( () => {
        document.querySelector('.lds-roller').style.display = 'none'
      
        showScores()
       
    }, 5000);
    
})




//Quiz Timer function
let time = 15
let quizTimeMinutes = time * 60 * 60
let quizTime = quizTimeMinutes / 60;
let quizTimer;

function startcountdown(){
    quizTimer = setInterval(function(){
    if (quizTime <= 0){

        //Stop timer when quiz time is less than zero and display the result box using the timeup() function
    clearInterval(quizTimer);
    document.querySelector(".container").innerHTML = `<p style="color: white;" class=" text-center">You have exhausted your time.<br>Processing result...</p>`
    document.querySelector('.lds-roller').style.display = 'block'
    setTimeout( () => {
        document.querySelector('.lds-roller').style.display = 'none'
        timeUp()
       
    }, 5000);
   
   
   
   
   
   }
   else{

    //Else reduce the time by 1 every secs
    quizTime--
    let sec = Math.floor(quizTime % 60);
    let min =  Math.floor(quizTime / 60) % 60;
    let counting = document.querySelector('.countdown')
    counting.innerHTML = `<i class="bi bi-clock bg-light"></i> ${min}mins : ${sec}secs` ;

   }

  
}, 1000)

}





//  The function for the evaluation box to show scores
function showScores(){
    let quizEndHTML = 
    `
    <div class="last-output animate-bottom">
    <h1 class ="display-4"><i class="bi bi-emoji-smile"></i></h1>
    <p>Quiz submitted succesfully!</p>
    <hr>
    <h4>Result</h4>
    <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%"></div>
  </div>
  <br>
    <p class="score">You Scored ${percent}%</p>
    <br>
    <span class="quiz-repeat">
    <a href="General Knowledge.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
    `;

 let quizElement = document.querySelector(".container");
 quizElement.innerHTML = quizEndHTML;

 questionsSection.style.display = 'none'
 
}


//HTML content to display when the time is up
function timeUp(){
    let quizStop = 
    `
    <div class="last-output animate-bottom">
    <h1 class ="display-4">Ooops! <i class="bi bi-emoji-frown"></i></h1>
    <p>Your time is up</p>
    <hr>
    <h4>Result</h4>
    <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%"></div>
  </div>
  <br>
    <p class="score">You Scored ${percent}%</p>
    <br>
    <span class="quiz-repeat">
    <a href="General Knowledge.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
    `;
 let quizStopElement = document.querySelector(".container");
 quizStopElement.innerHTML = quizStop;

 questionsSection.style.display = 'none'
}





//Update only questions, options and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically

//Tomiwa Olasupo
//June 29th 2022
//08076312290
