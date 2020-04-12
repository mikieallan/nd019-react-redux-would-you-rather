import { getInitialData, saveQuestion, saveQuestionAnswer, removeQuestionAnswer } from '../utils/api'
import { receiveUsers, addUserQuestion, addUserAnswer, removeUserAnswer } from './users'
import { receiveQuestions, addQuestion, answerQuestion, removeAnswer } from './questions'


export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}

export function handleAddQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState()
		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser
		})
		.then((question) => {
			dispatch(addQuestion(question))
			dispatch(addUserQuestion(authedUser, question.id))
		})
	}
}

export function handleAnswerQuestion (qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		const info = {
			authedUser: authedUser,
			qid,
			answer: answer
		}
		saveQuestionAnswer(info)
			.then(() => {
				dispatch(answerQuestion(authedUser, qid, answer))
				dispatch(addUserAnswer(authedUser, qid, answer))
			})
	}
}

export function handleDeleteAnswer (qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()
		const info = {
			authedUser: authedUser,
			qid,
			answer: answer
		}
		console.log(authedUser + qid + answer)
		removeQuestionAnswer(info)
			.then(() => {
				dispatch(removeAnswer(authedUser, qid, answer))
				dispatch(removeUserAnswer(authedUser, qid, answer))
			})
	}
}