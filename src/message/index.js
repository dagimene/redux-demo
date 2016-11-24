import angular from 'angular';

import component from './component';
import './style.css';

const ngModule = angular.module('message-view', []);

ngModule.component('rdMessageView', component);

export default ngModule.name;
