/**
 * @author Szczepan
 * Created on 22.05.2016.
 */
export default class GetAdvertisementsService {
    getAllAdvertisements(firebaseArray) {
        var ref = new Firebase("https://szczepix.firebaseio.com/advertisements");
        this.advertisements = firebaseArray(ref);
        return this.advertisements;
    }
}
