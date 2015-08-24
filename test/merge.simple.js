var Steward = require("../index");
var events  = require("events");
var test    = require("tape");

test("Creating instance", function (t) {
    var steward = new Steward(new events.EventEmitter());
    var actual  = steward.valid(1);
    steward.destroy();
    t.deepEqual(actual, true);
    t.end();
});

test("Creating instance", function (t) {
    var steward = new Steward(new events.EventEmitter());
    var actual  = steward.valid(1);
    actual      = steward.valid(1);
    steward.destroy();
    t.deepEqual(actual, true);
    t.end();
});

test("Creating instance", function (t) {
    var steward = new Steward(new events.EventEmitter());
    var actual  = steward.valid(1);
    actual      = steward.valid(2);
    steward.destroy();
    t.deepEqual(actual, false);
    t.end();
});


