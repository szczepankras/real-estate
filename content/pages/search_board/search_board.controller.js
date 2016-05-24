/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class SearchBoardController {
    constructor(GetAdvertisementsService, $firebaseArray, DateConverter, QueryService) {
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
        this.dateConverter = DateConverter;
        this.query = QueryService.getResult();
    }

    expirationDate(date) {
        return this.dateConverter.expirationDate(date);
    }

    convertDate(date) {
        return this.dateConverter.convertDate(date);
    }
}