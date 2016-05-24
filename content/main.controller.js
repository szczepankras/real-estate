/**
 * @author Szczepan
 * Created on 24.05.2016.
 */
/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class MainController {
    constructor(UserService) {
        this.userService = UserService;
    }

    setUser(){
        console.log(this.user);
        this.userService.setUser(this.user);
    }
}