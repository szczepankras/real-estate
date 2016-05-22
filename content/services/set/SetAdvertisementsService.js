/**
 * @author Szczepan
 * Created on 22.05.2016.
 */
export default class GetAdvertisementsService {
    setAdvertisement(record) {
        var ref = new Firebase("https://szczepix.firebaseio.com/");
        var recordRef = ref.child("advertisements");
        recordRef.push(record);
    }
}
