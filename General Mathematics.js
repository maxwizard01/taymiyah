//Update only questions and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically
//Tomiwa Olasupo
//Read only!!!
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
const Submit = document.querySelector(".submit-btn");




//Question and options array
const questions = [

    {question: 'Evaluate (101.5)<sup>2</sup>- (100.5)<sup>2</sup>',
    answers: [{text: '1', isAnswer:false}, {text: '2.02', isAnswer:false}, {text: '202', isAnswer:true},
     {text: '2022', isAnswer:false}] 
    },


    {question: 'Find the root of the equation 2x<sup>2</sup>-3x - 2',
    answers: [{text: 'x = -2 or 1/2', isAnswer:false}, {text: 'x = -2 or 1', isAnswer:false}, {text: 'x = -1 or 2', isAnswer:false},
     {text: 'x = -1/2 or 2', isAnswer:true}] 
    },

    {question: 'If the 2nd and 5th term of a G.P are 6 and 48 respectively, find the sum of the first four term',
    answers: [{text: '40', isAnswer:false}, {text: '50', isAnswer:false}, {text: '65', isAnswer:false},
     {text: '45', isAnswer:true}] 
    },

    {question: 'What value of K makes the given expression a perfect square <strong> m<sup>2</sup> - 8m + k </strong>',
    answers: [{text: '16', isAnswer:true}, {text: '8', isAnswer:false}, {text: '64', isAnswer:false},
     {text: '14', isAnswer:false}] 
    },

    {question: 'Evaluate log<sub>10</sub>6 + log<sub>10</sub>45 - log<sub>10</sub>27',
    answers: [{text: '11', isAnswer:false}, {text: '111', isAnswer:false}, {text: '1', isAnswer:true},
     {text: '101', isAnswer:false}] 
    },
//CHECK
    {question: 'A cone is amde from a sector of circle of radius 14cm and angle of 90 degree. What is the area of the curved surface of the cone. take pi = 22/7',
    answers: [{text: '22cm2', isAnswer:true}, {text: '38.5cm2', isAnswer:false}, {text: '154cm2', isAnswer:false},
     {text: '308cm2', isAnswer:false}] 
    },

    {question: 'Factorize 35 -2b- b<sup>2</sup>',
    answers: [{text: '(7+b)(5-b)', isAnswer:true}, {text: '(35-2b)(b-1)', isAnswer:false}, {text: '(3+7b)(5-b)', isAnswer:false},
     {text: '(7+b)(5+b)', isAnswer:false}] 
    },

    
    {question: 'Find the equation whose roots are -2/3 and -1/4',
    answers: [{text: '12x^2 + 11x + 2 = 0', isAnswer:true}, {text: '12x^2 - 11x + 2 = 0', isAnswer:false}, {text: '2x^2 + 11x + 2 = 0', isAnswer:false},
     {text: 'x^2 + 11x + 2 = 0', isAnswer:false}] 
    },

    {question: 'Evaluate 0.009/0.012',
    answers: [{text: '7.5* 10^-1', isAnswer:true}, {text: '7.5* 10^1', isAnswer:false}, {text: '7.5* 10^-2', isAnswer:false},
     {text: '7.5* 10^-3', isAnswer:false}] 
    },

    {question: 'If 3<sup>y</sup> = 243. Find the value of Y',
    answers: [{text: '2', isAnswer:false}, {text: '3', isAnswer:false}, {text: '4', isAnswer:false},
     {text: '5', isAnswer:true}] 
    },

    {question: 'Mr. Kofi sold an article for C7.50 instead of C12.75. Calculate the percentage error  correct to one d.p',
    answers: [{text: '1.4%', isAnswer:false}, {text: '18.3%', isAnswer:false}, {text: '41.2%', isAnswer:true},
     {text: '5.3%', isAnswer:false}] 
    },

    {question: 'The first term of A.P is equal to twice the common difference d. Find, in terms of d, the 5th term of the A.P',
    answers: [{text: '4d', isAnswer:false}, {text: 'a+5d', isAnswer:false}, {text: '6d', isAnswer:true},
     {text: '2a+4d', isAnswer:false}] 
    },


    {question: 'Simplify 36<sup>1/2</sup> x 64<sup>-1/3</sup> x 5<sup>0</sup>',
    answers: [{text: '0', isAnswer:false}, {text: '3/2', isAnswer:true}, {text: '2/3', isAnswer:false},
     {text: '7/2', isAnswer:false}] 
    },

    {question: 'Which of the following is not a measure of dispersion',
    answers: [{text: 'mode', isAnswer:true}, {text: 'mean deviation', isAnswer:false}, {text: 'range', isAnswer:false},
     {text: 'interquatile range', isAnswer:false}] 
    },

    {question: 'In a given regular polygon, the ratio of the exterior angle to the interior angle is 1:3. How many side has the polygon',
    answers: [{text: '40', isAnswer:false}, {text: '8', isAnswer:true}, {text: '6', isAnswer:false},
     {text: '12', isAnswer:false}] 
    },

    {question: 'Convert 77 to base two',
    answers: [{text: '1001101', isAnswer:true}, {text: '111001', isAnswer:false}, {text: '1001110', isAnswer:false},
     {text: '10011', isAnswer:false}] 
    },

    {question: 'Find the median of the following set of scores 65,72,55,48,78',
    answers: [{text: '55', isAnswer:false}, {text: '60', isAnswer:false}, {text: '63.5', isAnswer:false},
     {text: '65', isAnswer:true}] 
    },


    {question: 'Two solid spheres have the volumes 250cm<sup>3</sup> and 128cm<sup>3</sup> respectively. Find the ratio of their radii',
    answers: [{text: '125:64', isAnswer:false}, {text: '25:16', isAnswer:false}, {text: '2:1', isAnswer:false},
     {text: '5:4', isAnswer:true}] 
    },

    {question: 'Find the probability that a number selected from 30 - 50 inclusive is a prime number',
    answers: [{text: '1/4', isAnswer:false}, {text: '5/21', isAnswer:true}, {text: '2/7', isAnswer:false},
     {text: '1/3', isAnswer:false}] 
    },

    {question: 'Find (101<sub>2</sub>)<sup>2</sup> expressing the answer in base two',
    answers: [{text: '10101', isAnswer:false}, {text: '11001', isAnswer:true}, {text: '10010', isAnswer:false},
     {text: '11101', isAnswer:false}] 
    },

    {question: 'Solve the inequality 1/3(2x -1) < 5',
    answers: [{text: 'x < -5', isAnswer:false}, {text: 'x < 8', isAnswer:true}, {text: 'x < -6', isAnswer:false},
     {text: 'x < 16', isAnswer:false}] 
    },

    
    {question: 'Find the median of the following set of scores 65,72,55,48,78',
    answers: [{text: '55', isAnswer:false}, {text: '60', isAnswer:false}, {text: '63.5', isAnswer:false},
     {text: 'No answer', isAnswer:true}] 
    },


    {question: 'Factorize 32x<sup>3</sup> -8xy<sup>2<sup>',
    answers: [{text: '4(4x + y)(2x-y)', isAnswer:false}, {text: '(16x - y)(2x+y)', isAnswer:false}, {text: '8x(2x - y)', isAnswer:false},
     {text: '8x(2x + y)(2x-y)', isAnswer:true}] 
    },

    {question: 'Express (0.0425 / 2.5) as a fraction',
    answers: [{text: '17/10,000', isAnswer:false}, {text: '17/1000', isAnswer:true}, {text: '17/250', isAnswer:false},
     {text: '17/10', isAnswer:false}] 
    },

    {question: 'P varies inversely as the square of W. When W = 4, P = 9. Find the value of P when W = 9',
    answers: [{text: '729/16', isAnswer:false}, {text: '6', isAnswer:false}, {text: '4', isAnswer:false},
     {text: '16/9', isAnswer:true}] 
    },

    {question: 'Given that 2p-m = 6 and 2p + 4m = 1, find the value of 4p+3m',
    answers: [{text: '1', isAnswer:false}, {text: '3', isAnswer:false}, {text: '9', isAnswer:false},
     {text: '7', isAnswer:true}] 
    },

    {question: 'The interior angles of a pentagon are 126, 114, y, 92 and 83 [All in degree]. Find the value of Y',
    answers: [{text: '85 degree', isAnswer:false}, {text: '125 degree', isAnswer:true}, {text: '105 degree', isAnswer:false},
     {text: '115 degree', isAnswer:false}] 
    },


    {question: 'The area of a circle is 38.5cm<sup>2</sup>. Find its diameter',
    answers: [{text: '22cm', isAnswer:false}, {text: '14cm', isAnswer:false}, {text: '7cm', isAnswer:true},
     {text: '9cm', isAnswer:false}] 
    },

    {question: 'Given that P varies directly as Q while Q varies inversely as R, which of the following statement is true ?',
    answers: [{text: 'R varies directly as P', isAnswer:false}, {text: 'P varies inversely as R', isAnswer:true}, {text: 'P varies directly as R', isAnswer:false},
     {text: 'Q varies inversely as P', isAnswer:false}] 
    },

    {question: 'Find the common ratio in the G.P : log 3, log 9, log 81...',
    answers: [{text: '2', isAnswer:true}, {text: '3', isAnswer:false}, {text: '6', isAnswer:false},
     {text: '9', isAnswer:false}] 
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
    //Display loader on click
    document.querySelector('.lds-roller').style.display = 'block'

    //Clear HTML content onclick on submit button 
    document.querySelector('.Calc-container').style.display = 'none'
    clearInterval(quizTimer)
    document.querySelector(".container").innerHTML = `<p style="color: white;" class="text-center">Processing result...<br>Please wait..</p>`
   
    setTimeout( () => {
        document.querySelector('.lds-roller').style.display = 'none'
      
        showScores()
       
    }, 5000);
    
})




//Quiz Timer function
let time = 30
let quizTimeMinutes = time * 60 * 60
let quizTime = quizTimeMinutes / 60;
let quizTimer;

function startcountdown(){
    quizTimer = setInterval(function(){
    if (quizTime <= 0){

        //Stop timer when quiz time is less than zero and display the result box using the timeup() function
        clearInterval(quizTimer);
        document.querySelector('.Calc-container').style.display = 'none'
        document.querySelector(".container").innerHTML = `<p style="color: white;" class="text-center">You have exhausted your time.<br>Processing result...</p>`
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

  
}, 900)

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
    <a href="General Mathematics.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
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
    <a href="General Mathematics.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
    `;
 let quizStopElement = document.querySelector(".container");
 quizStopElement.innerHTML = quizStop;

 questionsSection.style.display = 'none'
}


//Calculator function

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('Calc-button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
      switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            break;
         case 'Del':
            display.innerText = display.innerText.slice(0, -1)
            break;

            
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Syntax error!';

                   

                }
               
                break;

        default: 
          display.innerText += e.target.innerText;
      }
    })


})

  
function openCalc() {
    document.getElementById("Calculator").style.display = "block";
  }
  
  function closecalc() {
    document.getElementById("Calculator").style.display = "none";
  }

 



//Update only questions, options and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically

//Tomiwa Olasupo
//June 29th 2022
//08076312290
