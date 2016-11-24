import { expect } from 'chai';
import { openMessageReducer } from '../src/reducers';
import {
	OPEN_MESSAGE,
	MARK_AS_UNREAD,
} from '../src/actions';

describe('Reducers', function() {

	describe('Messages Reducer', function() {
		it('should open message', function() {
			const initialState = {};
			const action = {
				type: OPEN_MESSAGE,
				payload: {
					id: '5'
				}
			};

			const newState = openMessageReducer(initialState, action);

			expect(newState).to.have.property('id').that.equals('5');
		});

		it('should close message when unread', function() {
			const initialState = {
				id: '5'
			};
			const action = {
				type: MARK_AS_UNREAD,
				payload: {
					id: '5'
				}
			};

			const newState = openMessageReducer(initialState, action);

			expect(newState).to.have.property('id').that.is.null;
		});
	})

});
