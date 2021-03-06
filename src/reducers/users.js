import {
	ADD_QUESTION,
	ANSWER_QUESTION,
	RECEIVE_USERS,
} from '../constants/actionType';

export default function users(state = {}, action) {
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat(
						action.question.id
					),
				},
			};
		case ANSWER_QUESTION:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer,
					},
				},
			};
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		default:
			return state;
	}
}
