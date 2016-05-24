/**
 * @author Szczepan
 * Created on 24.05.2016.
 */
/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class MainController {
    constructor(UserService, GetAdvertisementsService, $firebaseArray, QueryService) {
        this.userService = UserService;
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
        this.queryService = QueryService;
    }

    setUser(){
        console.log(this.user);
        this.userService.setUser(this.user);
    }

    search(){
        console.log(this.phrase);
        this.queryService.setResult(this.phrase);
    }

    logout(){
        this.user = " ";
        this.userService.setUser(this.user);
    }
}