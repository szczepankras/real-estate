/**
 * @author Szczepan
 * Created on 23.05.2016.
 */
export default function login() {
    return {
        restrict: 'E',
        template: require('./login.html')
    }
}
/*
import loginController from './login.controller.js';

export default angular
    .module('app.login', [])
    .controller('LoginController', loginController);*/
