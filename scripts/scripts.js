/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
// get the input field


const description = document.querySelector('#description')
const questions = document.querySelectorAll('.hidden');
let currentQuestionIndex = -1

function startQuiz() {

  //让description消失
  description.style.display = 'none'; 
  //显示class.hidden里的index0；
  showNextQuestion();
}

function showNextQuestion(){
  //当开始显示问题时，currentQuestionIndex开始>=0
  if (currentQuestionIndex >=0) {
    questions[currentQuestionIndex].style.display = 'none'; 
  }

  //index逐渐增加
  currentQuestionIndex++; 
  if (currentQuestionIndex < questions.length){
    questions[currentQuestionIndex].style.display = 'block';
  }

  else{
    result();
  }
}