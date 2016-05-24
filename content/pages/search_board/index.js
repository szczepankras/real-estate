/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularFire from 'angularFire';
import firebase from 'firebase';

import routing from './search_board.routes.js';
import searchBoardController from './search_board.controller.js';

import getAdvertisementsService from '../../services/get/GetAdvertisementsService'
import queryService from '../../services/query/QueryService'
import dateConverter from "../../utils/DateConverter";
import searchInput from '../../directives/searchInput';

export default angular
    .module('app.search_board', [uirouter, angularFire])
    .config(routing)
    .controller('SearchBoardController', searchBoardController)
    .service('GetAdvertisementsService', getAdvertisementsService)
    .service('DateConverter', dateConverter)
    .service('QueryService', queryService)
    .directive('searchInput', searchInput)
    .name;