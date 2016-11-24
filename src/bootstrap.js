import angular from 'angular';
import messages, { element } from '.';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

const body = document.querySelector('body');
body.appendChild(element);
angular.bootstrap(body, [ messages ]);
