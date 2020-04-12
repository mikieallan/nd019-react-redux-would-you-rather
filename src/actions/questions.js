
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER'

export function addQuestion (question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function receiveQuestions(questions) {
 	return {
 		type: RECEIVE_QUESTIONS,
 		questions
 	}
}

export function answerQuestion(authedUser, qid, answer) {
 	return {
 		type: ANSWER_QUESTION,
 		authedUser,
 		qid,
 		answer
 	}
}

export function removeAnswer(authedUser, qid, answer) {
 	return {
 		type: REMOVE_QUESTION_ANSWER,
 		authedUser,
 		qid,
 		answer
 	}
}