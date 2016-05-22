/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class AddController {
    constructor(SetAdvertisementsService, $scope) {
        this.$scope = $scope;
        this.setAdvertisementService = SetAdvertisementsService;
    }

    addRecord() {
        console.log(this.$scope.category);
        var record = {
            "title": this.$scope.title,
            "content": this.$scope.description,
            "number": this.$scope.number,
            "category": this.$scope.category
        };
        this.setAdvertisementService.setAdvertisement(record);
        this.clearInputs();
    }

    clearInputs() {
        this.$scope.title = "";
        this.$scope.description = "";
        this.$scope.number = "";
    }
}