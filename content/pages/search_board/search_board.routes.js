/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default function routes($stateProvider){
    $stateProvider.state('search_board', {
        url: '/search_board',
        template: require('./search_board.html'),
        controller: 'SearchBoardController',
        controllerAs: 'search_board'
    })
}