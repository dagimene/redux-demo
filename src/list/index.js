import angular from 'angular';

import './style.css';
import messageListComponent from './list-component';
import messageListItemComponent from './item-component';

const ngModule = angular.module('message-list', []);

ngModule.component('rdMessageList', messageListComponent);
ngModule.component('rdMessageListItem', messageListItemComponent);

export default ngModule.name;
