/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './my_board.routes.js';
import myBoardController from './my_board.controller.js';

export default angular
    .module('app.my_board', [uirouter])
    .config(routing)
    .controller('MyBoardController', myBoardController)
    .name;