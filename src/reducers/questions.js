import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION, REMOVE_QUESTION_ANSWER } from '../actions/questions'
import { omit } from 'lodash'

export default function users (state = {}, action) {
	switch(action.type) {
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions
			}
		case ADD_QUESTION :
			const { question } = action
			return {
				...state,
				[question.id]: question,
			}

		case ANSWER_QUESTION:
			const { authedUser, qid, answer } = action

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			}

		case REMOVE_QUESTION_ANSWER:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
		        	[action.answer]: {
		        		...state[action.qid][action.answer],
		            	votes: state[action.qid][action.answer].votes.filter(voter => voter !== action.authedUser)
		          	}
				}
			}

		default :
			return state
	}
}