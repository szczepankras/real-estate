/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('edit', {
        url: '/edit',
        template: require('./edit.html'),
        controller: 'EditController',
        controllerAs: 'edit'
    })
}