/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class BoardController {
    constructor(GetAdvertisementsService, $firebaseArray) {
       this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
    }

    expirationDate(arg){
        var expirationDate  = this.addDays(new Date(), 7);
        return expirationDate.toDateString();
    }

     addDays(theDate, days) {
        return new Date(theDate.getTime() + days*24*60*60*1000);
    }
}