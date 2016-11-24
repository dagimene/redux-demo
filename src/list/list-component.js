import template from './list-template.html';
import {
	loadMessages
} from '../actions'

export default {
	template,
	controller: class MessageListController {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
		}

		$onInit() {
			this._unsubscribe = this.$ngRedux.connect(
				state => this.mapStateToThis(state),
				{
					loadMessages
				}
			)(this);

			this.loadMessages();
		}

		$onDestroy() {
			this._unsubscribe();
		}

		mapStateToThis(state) {
			return {
				messages: state.messageList
			};
		}
	}
}
