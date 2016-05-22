/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './add.routes.js';
import addController from './add.controller.js';

export default angular
    .module('app.add', [uirouter])
    .config(routing)
    .controller('AddController', addController)
    .name;