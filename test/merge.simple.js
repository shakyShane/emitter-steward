"use strict";

var Steward = require("../index");

var events  = require("events");
var assert  = require("chai").assert;

describe("Creating instance", function(){

    it("should return true", function(){
        var steward = new Steward(new events.EventEmitter());
        var actual  = steward.valid(1);
        assert.isTrue(actual);
    });
    it("should return true if same emmitter called", function(){
        var steward = new Steward(new events.EventEmitter());
        var actual  = steward.valid(1);
        actual      = steward.valid(1);
        assert.isTrue(actual);
    });
    it("should return FALSE if different emitter", function(){
        var steward = new Steward(new events.EventEmitter());
        var actual  = steward.valid(1);
        actual      = steward.valid(2);
        assert.isFalse(actual);
    });
});


