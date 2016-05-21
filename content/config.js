/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
}