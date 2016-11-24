import template from './template.html';
import {
	markAsUnread
} from '../actions'

export default {
	template,
	controller: class MessageViewController {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
		}

		$onInit() {
			this._unsubscribe = this.$ngRedux.connect(
				state => this.mapStateToThis(state),
				{
					markAsUnread
				}
			)(this);
		}

		$onDestroy() {
			this._unsubscribe();
		}

		mapStateToThis(state) {
			const openMessageId = state.openMessage.id;
			return {
				message: openMessageId ? state.messages[openMessageId] : null
			};
		}
	}
}
