/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularFire from 'angularFire';
import firebase from 'firebase';

import routing from './board.routes.js';
import boardController from './board.controller.js';

import getAdvertisementsService from '../../services/get/GetAdvertisementsService'
import dateConverter from "../../utils/DateConverter";

export default angular
    .module('app.board', [uirouter, angularFire])
    .config(routing)
    .controller('BoardController', boardController)
    .service('GetAdvertisementsService', getAdvertisementsService)
    .service('DateConverter', dateConverter)
    .name;