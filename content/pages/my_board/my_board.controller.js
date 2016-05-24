/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class MyBoardController {
    constructor(GetAdvertisementsService, SetAdvertisementsService, $firebaseArray, UserService, DateConverter) {
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
        this.setAdvertisementsService = SetAdvertisementsService;
        this.dateConverter = DateConverter;
        this.activeUser = UserService.getUser();
    }

    expirationDate(date) {
        return this.dateConverter.expirationDate(date);
    }

    convertDate(date) {
        return this.dateConverter.convertDate(date);
    }

    remove(advertisement_id) {
        for (var i = 0; i < this.advertisements.length; i++) {
            if (advertisement_id == this.advertisements[i].$id) {
                this.advertisements.$remove(i);
            }
        }
    }

    addTime(advertisement_id) {
        for (var i = 0; i < this.advertisements.length; i++) {
            if (advertisement_id == this.advertisements[i].$id) {
                this.advertisements[i].date = new Date().toDateString();
                this.setAdvertisementsService.updateAdvertisement(this.advertisements, this.advertisements[i]);
            }
        }
    }
}