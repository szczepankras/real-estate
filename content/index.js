/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import uirouter from 'angular-ui-router';
import routing from './config';

import home from './pages/home';
import board from './pages/board';
import my_board from './pages/my_board';
import add from './pages/add_editor';
import edit from './pages/edit';
import search_board from './pages/search_board';
import login from './directives/login';

import mainController from './main.controller';
import UserService from '../content/services/user/UserService';
import getAdvertisementsService from '../content/services/get/GetAdvertisementsService'
import queryService from '../content/services/query/QueryService'

const ngModule = angular
    .module('app', [uirouter, home, board, my_board, add, edit, search_board])
    .controller('MainController', mainController)
    .directive('login', login)
    .service('UserService', UserService)
    .service('GetAdvertisementsService', getAdvertisementsService)
    .service('QueryService', queryService)
    .config(routing);

export default ngModule;