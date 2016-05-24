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
        var record = {
            "user": this.userService.getUser(),
            "title": this.$scope.title,
            "content": this.$scope.description,
            "number": this.$scope.number,
            "category": this.$scope.category
        };
        if (this.checkIfFilled()) {
            this.setAdvertisementService.setAdvertisement(record);
        } else {
            alert("You missed some date! Please review all inputs");
        }
        this.clearInputs();
    }

    clearInputs() {
        this.$scope.title = undefined;
        this.$scope.description = undefined;
        this.$scope.number = undefined;
        this.$scope.user = undefined;
        this.$scope.category = undefined;
    }

    checkIfFilled() {
        if (this.$scope.title == undefined
            || this.$scope.description == undefined
            || this.$scope.number == undefined
            || this.$scope.user == undefined
            || this.$scope.category == undefined
        ) {
            return false;
        }
        return true;
    }
}