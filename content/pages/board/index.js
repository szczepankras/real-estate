/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './board.routes.js';
import boardController from './board.controller.js';

export default angular
    .module('app.board', [uirouter])
    .config(routing)
    .controller('BoardController', boardController)
    .name;