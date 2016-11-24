import template from './template.html';

export default {
	template,
	controller: class UnreadMessageCounterController {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
		}

		$onInit() {
			this._unsubscribe = this.$ngRedux.connect(
				state => this.mapStateToThis(state),
			)(this);
		}

		$onDestroy() {
			this._unsubscribe();
		}

		mapStateToThis(state) {
			return {
				unreadCount: state.messageList
					.map(messageId => state.messages[messageId])
					.filter(message => !message.read)
					.length
			};
		}
	}
}
