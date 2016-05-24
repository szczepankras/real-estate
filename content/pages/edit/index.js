/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './edit.routes.js';
import editController from './edit.controller.js';


export default angular
    .module('edit.add', [uirouter])
    .config(routing)
    .controller('EditController', editController)
    .name;