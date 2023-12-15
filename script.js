function checkAnswer() {
    var questionElement = document.getElementById('question');
    var answerElement = document.getElementById('answer');
    var resultElement = document.getElementById('result');
  
    var answer = parseInt(answerElement.value);
    var isCorrect = answer === calculateCorrectAnswer(questionElement.textContent);
  
    resultElement.textContent = isCorrect ? '答对了！🎉' : '答错了，请再试一次。';
  
    resultElement.className = isCorrect ? 'correct' : 'incorrect';
  
    // 酷炫动画效果，你可以根据需要添加更复杂的动画
    resultElement.style.animation = 'none';
    void resultElement.offsetWidth; // 强制重新绘制
    resultElement.style.animation = isCorrect ? 'correctAnimation 1s ease-in-out' : 'incorrectAnimation 1s ease-in-out';
  
    // 清空输入框
    answerElement.value = '';
  
    // 生成新问题
    generateNewQuestion();
  }
  
  function calculateCorrectAnswer(question) {
    var parts = question.split('+');
    var operand1 = parseInt(parts[0].trim());
    var operand2 = parseInt(parts[1].trim());
    return operand1 + operand2;
  }
  
  function generateNewQuestion() {
    var operand1 = Math.floor(Math.random() * 10) + 1;
    var operand2 = Math.floor(Math.random() * 10) + 1;
    var questionElement = document.getElementById('question');
    questionElement.textContent = operand1 + ' + ' + operand2;
  }
  