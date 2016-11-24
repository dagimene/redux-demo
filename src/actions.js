import messages from './messages.json'

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const MARK_AS_UNREAD = 'MARK_AS_UNREAD';
export const OPEN_MESSAGE = 'OPEN_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';

export function loadMessages() {
	return {
		type: LOAD_MESSAGES,
		payload: {
			messages
		}
	};
}

export function markAsUnread(id) {
	return {
		type: MARK_AS_UNREAD,
		payload: {
			id
		}
	};
}

export function openMessage(id) {
	return {
		type: OPEN_MESSAGE,
		payload: {
			id
		}
	};
}
