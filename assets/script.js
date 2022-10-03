function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

	}

	function showResults(questions, quizContainer, resultsContainer){

	}


	showQuestions(questions, quizContainer);


	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "When was The Terminator made?",
		answers: {
			a: '1985',
			b: '1999',
			c: '2003'
		},
		correctAnswer: 'a'
	},
	{
		question: "How many seasons in Prison Break?",
		answers: {
			a: '7',
			b: '5',
			c: '4'
		},
		correctAnswer: 'b'
	},
    {
		question: "How long is Avengers Endgame?",
		answers: {
			a: '2H 30M',
			b: '3H',
			c: '3H 2M'
		},
		correctAnswer: 'c'
	},
    {
		question: "When did the first Freddy Krueger come out",
		answers: {
			a: '1999',
			b: '1984',
			c: '1890'
		},
		correctAnswer: 'b'
	}
];