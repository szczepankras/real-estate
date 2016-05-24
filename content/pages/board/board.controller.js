/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
export default class BoardController {
    constructor(GetAdvertisementsService, $firebaseArray) {
        this.advertisements = GetAdvertisementsService.getAllAdvertisements($firebaseArray);
    }

    expirationDate(date) {
        if (date != undefined) {
            var dateArg = new Date(date);
            var expirationDate = this.addDays(dateArg, 7);
            return this.convertDate(expirationDate);
        }
        return "";
    }

    addDays(theDate, days) {
        return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
    }

    convertDate(inputFormat) {
        if (inputFormat != undefined) {
            function pad(s) {
                return (s < 10) ? '0' + s : s;
            }

            var d = new Date(inputFormat);
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-');
        }
        return "";
    }
}