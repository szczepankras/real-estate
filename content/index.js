/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import uirouter from 'angular-ui-router';
import routing from './config';

const ngModule = angular
                        .module('app', [uirouter])
                        .config(routing);
console.log(ngModule);