//require the facebook event search modles
const EventSearch = require("facebook-events-by-location-core");

class FacebookSearch {
    static doGetFaceBookEventsByLocation(lat, lng) {
        //promise retrieves the longitide and latitude of events data
        return new Promise(
            (resolve, reject) => {
                const es = new EventSearch({
                    "lat": lat,
                    "lng": lng,
                    //facebook api access token
                    "accessToken": "1008287122650951|T1PGAwLxk51VVC9wckTdKXAdHuk"
                });
                es.search().then(function (events) {
                    //returns the JSON data in a large string format
                    let jsonData = JSON.stringify(events);
                    console.log(jsonData);
                    resolve(jsonData);
                })
                    .catch(function (error) {
                        //returns an error if the data cannot be successfully retrieved
                        let jsonDataError = JSON.stringify(error);
                        console.error(jsonDataError);
                        reject(jsonDataError);
                    });
            });
    }
};

//exports the specified module to be used
module.exports = FacebookSearch;


























/*
const EventSearch = require("facebook-events-by-location-core");

class FacebookSearch {
    static doGetFaceBookEventsByLocation(lat, lng){
        return new Promise(
            (resolve, reject) => {
                const es = new EventSearch({
                    "lat": 40.710803,
                    "lng": -73.964040
                });

                es.search().then(function (events) {
                    console.log(JSON.stringify(events));
                    resolve(JSON.stringify(events));
                }).catch(function (error) {
                    console.error(JSON.stringify(error));
                    reject(JSON.stringify(error));
                });
            }
        )
    }
}

module.exports = FacebookSearch;

 */