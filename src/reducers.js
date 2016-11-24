import {
	LOAD_MESSAGES,
	MARK_AS_UNREAD,
	OPEN_MESSAGE,
	CLOSE_MESSAGE,
} from './actions';

export function messageListReducer(state = [], action) {
	switch (action.type) {
		case LOAD_MESSAGES: {
			return action.payload.messages.map(message => message.id);
		}
	}

	return state;
}

export function openMessageReducer(state = {}, action) {
	switch (action.type) {
		case OPEN_MESSAGE: {
			return {
				id: action.payload.id
			}
		}

		case CLOSE_MESSAGE: {
			return {
				id: null
			};
		}

		case MARK_AS_UNREAD: {
			const unreadMessageId = action.payload.id;
			return unreadMessageId === state.id ? {
				id: null
			} : state;
		}
	}

	return state;
}

export function messagesReducer(state = {}, action) {
	switch (action.type) {
		case LOAD_MESSAGES: {
			const messages = {};

			action.payload.messages.forEach(message => messages[message.id] = message);

			return {
				...state,
				...messages,
			};
		}

		case OPEN_MESSAGE: {
			const id = action.payload.id;
			const message = state[id];
			return {
				...state,
				[id]: {
					...message,
					read: true
				}
			};
		}

		case MARK_AS_UNREAD: {
			const id = action.payload.id;
			const message = state[id];
			return {
				...state,
				[id]: {
					...message,
					read: false
				}
			};
		}
	}

	return state;
}
