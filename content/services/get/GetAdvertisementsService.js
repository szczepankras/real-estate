/**
 * @author Szczepan
 * Created on 22.05.2016.
 */
export default class GetAdvertisementsService {
    getAllAdvertisements(firebaseArray) {
        var ref = new Firebase("https://szczepix.firebaseio.com/items");
        this.items = firebaseArray(ref);
        return this.items;
    }
}
