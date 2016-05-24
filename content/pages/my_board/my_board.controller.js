/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class MyBoardController {
    constructor(GetAdvertisementsService, $firebaseArray) {
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
    }
}