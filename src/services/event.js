import api from "./api";

export default {
    getEventList (month, year) {

        let query = ""

        if( month !== "" && year !== "" ){
            query = "?month=" + month + "&year=" + year
        }

        return new Promise((resolve, reject) => {
            api.get(
                "event/list" + query
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
    addEvents (month, eventName, eventFrom, eventTo, eventSpecificDays) {

        return new Promise((resolve, reject) => {
            api.post(
                "event/save",
                {
                    "month":month,
                    "event_name":eventName,
                    "from":eventFrom,
                    "to":eventTo,
                    "specific_days":eventSpecificDays,
                }
            )
                .then(response => {
                    return resolve(response);
                })
                .catch((status, error) => {
                    reject(status, error);
                });
        });
    },
}