import { expect } from 'chai';
import {
	OPEN_MESSAGE,
	MARK_AS_UNREAD,
	openMessage,
	markAsUnread
} from '../src/actions';

describe('Action Creators', function() {

	describe('Open Message', function() {
		it('should create OPEN_MESSAGE action', function() {
			const action = openMessage('5');
			expect(action).to.have.property('type').that.equals(OPEN_MESSAGE);
			expect(action).to.have.deep.property('payload.id').that.equals('5');
		});

		it('should creaete MARK_AS_UNREAD action', function() {
			const action = markAsUnread('5');
			expect(action).to.have.property('type').that.equals(MARK_AS_UNREAD);
			expect(action).to.have.deep.property('payload.id').that.equals('5');
			const initialState = {
				id: '5'
			};
		});
	})

});
