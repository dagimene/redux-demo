import angular from 'angular';

import messageList from './list';
import messageView from './message';
import unreadMessageCounter from './counter';
import storeConfig from './store-config';

import messagesAppComponent from './component'
import ngRedux from 'ng-redux';

import './style.css';

const ngModule = angular.module('redux-demo', [
	ngRedux,
	messageList,
	messageView,
	unreadMessageCounter
]);

ngModule.component('rdMessagesApp', messagesAppComponent);
ngModule.config(storeConfig);

export default ngModule.name;
export const element = angular.element('<rd-messages-app></rd-messages-app>')[0];

