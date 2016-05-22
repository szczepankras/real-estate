/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('add', {
        url: '/add',
        template: require('./add.html'),
        controller: 'AddController',
        controllerAs: 'add'
    })
}