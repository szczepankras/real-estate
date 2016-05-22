/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('board', {
        url: '/board',
        template: require('./board.html'),
        controller: 'BoardController',
        controllerAs: 'board'
    })
}