import template from './item-template.html';
import {
	openMessage
} from '../actions'

export default {
	template,
	bindings: {
		messageId: '<',
	},
	controller: class MessageItemController {
		constructor($ngRedux) {
			this.$ngRedux = $ngRedux;
		}

		$onInit() {
			this._unsubscribe = this.$ngRedux.connect(
				state => this.mapStateToThis(state),
				{
					openMessage
				}
			)(this);
		}

		$onDestroy() {
			this._unsubscribe();
		}

		mapStateToThis(state) {
			return {
				message: state.messages[this.messageId],
				isSelected: state.openMessage.id === this.messageId
			};
		}
	}
}
