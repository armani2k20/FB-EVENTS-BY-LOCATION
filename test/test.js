//requie the required modules for unit test
const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const EventObject = require("../models/searchModel");

//sample object for unit testing
let testObject = {
    id: 4,
    name: "Test Event",
    date: "01-02-2016",
    city: "london",
    zip: "se253rd",
    latitude: 10209930201,
    longitude: 121219023
};

//testing if the model matches the object
describe("Event Model", () => {
    it("Should match testObject structure", (done) => {
        const EventObj = new EventObject(testObject);
        assert.isObject(EventObj, "it is an object");
        done();
    });
});