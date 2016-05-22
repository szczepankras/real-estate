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

const ngModule = angular
                        .module('app', [uirouter, home, board, my_board, add, edit])
                        .config(routing);