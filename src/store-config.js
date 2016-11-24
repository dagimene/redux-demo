import createLogger from 'redux-logger';
import { combineReducers } from 'redux';

import {
	messagesReducer as messages,
	messageListReducer as messageList,
	openMessageReducer as openMessage
} from './reducers';

export default function storeConfig($ngReduxProvider) {
	$ngReduxProvider.createStoreWith(
		// reducer
		combineReducers({
			messages,
			messageList,
			openMessage
		}),

		//middleware
		[
			createLogger()
		],

		// enhancers
		[
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		]
	);
}
