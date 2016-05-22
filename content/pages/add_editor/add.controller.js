/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class AddController {
    constructor(SetAdvertisementsService) {
        this.setAdvertisementService = SetAdvertisementsService;
    }

    saveRecord(){
        this.setAdvertisementService.setAdvertisement({"content": "dupa", "date": "20-05-2016"});
    }
}