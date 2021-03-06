/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './add.routes.js';
import addController from './add.controller.js';

import mainEditor from '../../directives/main_editor';

import setAdvertisementsService from '../../services/set/SetAdvertisementsService';

import UserService from '../../services/user/UserService';

export default angular
    .module('app.add', [uirouter])
    .config(routing)
    .controller('AddController', addController)
    .directive('mainEditor', mainEditor)
    .service('SetAdvertisementsService', setAdvertisementsService)
    .service('UserService', UserService)
    .name;