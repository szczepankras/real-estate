/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularFire from 'angularFire';
import firebase from 'firebase';

import routing from './my_board.routes.js';
import myBoardController from './my_board.controller.js';

import getAdvertisementsService from '../../services/get/GetAdvertisementsService';
import dateConverter from "../../utils/DateConverter";

export default angular
    .module('app.my_board', [uirouter, angularFire])
    .config(routing)
    .controller('MyBoardController', myBoardController)
    .service('GetAdvertisementsService', getAdvertisementsService)
    .service('DateConverter', dateConverter)
    .name;