/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('my_board', {
        url: '/my_board',
        template: require('./my_board.html'),
        controller: 'MyBoardController',
        controllerAs: 'my_board'
    })
}