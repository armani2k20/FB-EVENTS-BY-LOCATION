//requires the node-geocoder module
const NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
    // Optional depending on the providers 
    httpAdapter: 'https', // Default 
    //google geo api key
    apiKey: 'AIzaSyDGIj8WZWEA-DVXMELipIxW2IJmGGB9qVk',
    // 'gpx', 'string', ... 
    formatter: null
};

//assigning variable to NodeGeocoder function
var geocoder = NodeGeocoder(options);

class FetchSearchEvents {
    /**
     * retrieves longitude and latitude data from events using geocoder
     * @param: data
     * @param: resolve
     * @param: reject
     * returns the retrieved long and lat data, console logs the errors
     **/
    static fetchLatandlongData(data) {
        return new Promise(
            (resolve, reject) => {
                geocoder.geocode(data)
                    .then(function (res) {
                        console.log(res);
                        //assigning varibables to the events longitude and latitude data
                        let lat = res[0].latitude;
                        let long = res[0].longitude;
                        //return the resolved promise data (longitude and latitude)
                        resolve([long, lat]);
                    })
                    //if un-resolved, console log the error
                    .catch(function (err) {
                        console.log(err);
                    });
            });
    };
};
//xports the current class to be used 
module.exports = FetchSearchEvents;