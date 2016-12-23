//requring the modules
const facebookSearch = require("../libs/facebookSearch");
const fbGeocoder = require("../libs/fbGeocoder");

class EventSearchController {
    static searchForEvents(req, res) {
        //retrieves latitiude and longitude data from event 
        fbGeocoder.fetchLatandlongData(req.params.text)
            .then(result => {
                return facebookSearch.doGetFaceBookEventsByLocation(result[1], result[0])
            })
            //respond with ok status if the longitude and latitude are successfully retrived
            .then(result => {
                res.status(200).send(result);
            })
            //resppond with 400 error if not successful
            .catch(err => {
                res.status(400).status(err.message);
            });
    }
}
//exported to make visible by the other modules
module.exports = EventSearchController;