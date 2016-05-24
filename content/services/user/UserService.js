/**
 * @author Szczepan
 * Created on 24.05.2016.
 */
export default class UserService {
    constructor() {
        this.user = "undefinedUser";
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
      this.user = user;
    }


}