/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class BoardController {
    constructor(GetAdvertisementsService, $firebaseArray, DateConverter) {
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
        this.dateConverter = DateConverter;
    }

    expirationDate(date) {
        return this.dateConverter.expirationDate(date);
    }

    addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }

    convertDate(date) {
        return this.dateConverter.convertDate(date);
    }

}