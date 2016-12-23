class EventObject {
    constructor(obj) {

        //if the event does not have an id then throw an error
        if (!obj.id) {
            throw new Error("Event does not have a valid id");
        } else {
            this.id = obj.id;
        }

        //if the eventt does not have a valid name then throw an error
        if (!obj.name) {
            throw new Error("Event does not have a name");
        } else {
            this.name = obj.name;
        }

        //if the event does not have a valid start date then throw an error
        if (!obj.date) {
            throw new Error("Event has no start date");
        } else {
            this.date = obj.date;
        }

        //if the event city has not been specified then throw an error
        if (!obj.city) {
            throw new Error("Event has no city address");
        } else {
            this.city = obj.city;
        }

        //if the event does not have a zip code then throw an error
        if (!obj.zip) {
            throw new Error("Event has no zip code address");
        } else {
            this.zip = obj.zip;
        }

        //if the events latitude return a value of 0 throw an error
        if (obj.latitude == "0") {
            throw new Error("Event does not have a valid latitude");
        } else {
            this.latitude = obj.latitude;
        }

        //if the events longitude return a value of 0 throw an error
        if (obj.longitude == "0") {
            throw new Error("Event does not have a valid longitude");
        } else {
            this.longitude = obj.longitude;
        }
    }
}
//exports the event class 
module.exports = EventObject;