/**
 * @author Szczepan
 * Created on 21.05.2016.
 */

export default class AddController {
    constructor(SetAdvertisementsService, $scope, UserService) {
        this.$scope = $scope;
        this.setAdvertisementService = SetAdvertisementsService;
        this.userService = UserService;
    }

    addRecord() {
        console.log(this.userService.getUser());
        console.log(this.$scope.category);
        console.log(this.$scope.number);
        console.log(this.$scope.description);
        console.log(this.$scope.title);
        var record = {
            "user": this.userService.getUser(),
            "title": this.$scope.title,
            "content": this.$scope.description,
            "number": this.$scope.number,
            "category": this.$scope.category,
            "date": new Date().toDateString()
        };
        if (this.checkIfFilled()) {
            this.setAdvertisementService.setAdvertisement(record);
            this.clearInputs();
        } else {
            alert("You missed some date! Please review all inputs");
        }
    }

    clearInputs() {
        this.$scope.title = undefined;
        this.$scope.description = undefined;
        this.$scope.number = undefined;
        this.$scope.category = undefined;
    }

    checkIfFilled() {
        if (this.$scope.title == undefined
            || this.$scope.description == undefined
            || this.$scope.number == undefined
            || this.userService.getUser() == undefined
            || this.$scope.category == undefined
        ) {
            return false;
        }
        return true;
    }
}