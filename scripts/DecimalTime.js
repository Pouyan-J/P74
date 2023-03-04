"use strict";

// DecimalTime.js
// Version 1.0.0
//
// Original code stolen from https://cable.ayra.ch/metric/ under the WTFPL

// Copyright (c) 2016 Kevin Gut
//
// This program is free software. It comes without any warranty, to
// the extent permitted by applicable law. You can redistribute it
// and/or modify it under the terms of the Do What The Fuck You Want
// To Public License, Version 2, as published by Sam Hocevar. See
// http://www.wtfpl.net/ for more details.

// Provides decimal time functionality
// see http://en.wikipedia.org/wiki/Decimal_time

(function () {
    Date.prototype.getMetric = function () {
        var MAX = 86400000;
        var time = this.getTime();
        var clone = new Date(this.getTime());
        clone.setHours(0);
        clone.setMinutes(0);
        clone.setSeconds(0);
        clone.setMilliseconds(0);
        var midnight = clone.getTime();
        var daytime = time - midnight;
        var metric = daytime / MAX * 10;
        return {
            fraction: metric,
            hours: metric | 0,
            minutes: metric * 100 % 100 | 0,
            seconds: metric * 10000 % 100 | 0,
            milliseconds: metric * 10000000 % 1000 | 0
        };
    };
    Date.fromMetric = function (x) {
        //Accept metric time object.
        if (typeof(x.fraction) === typeof(0)) {
            x = x.fraction;
        }
        if (typeof(x) === typeof(0)) {
            var MAX = 86400000;
            var base = new Date();
            base.setHours(0);
            base.setMinutes(0);
            base.setSeconds(0);
            base.setMilliseconds(0);
            return new Date(x / 10 * MAX + base.getTime());
        }
        throw "Invalid argument in fromMetric. Expected " + typeof(0) + ", got " + typeof(x);
    };
})();
