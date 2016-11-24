import angular from 'angular';

import component from './component';

const ngModule = angular.module('message-counter', []);

ngModule.component('rdUnreadMessagesCounter', component);

export default ngModule.name;
