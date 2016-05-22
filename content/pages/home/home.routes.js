/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('home', {
        url: '/',
        template: require('./home.html'),
        controller: 'HomeController',
        controllerAs: 'home'
    })
}