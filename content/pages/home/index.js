/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import homeController from './home.controller';

export default angular
    .module('app.home', [uirouter])
    .config(routing)
    .controller('HomeController', homeController)
    .name;