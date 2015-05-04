/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 04.09.2015
 *   ASSIGNMENT: PPS Demo
 *   TODO:
 */

"use strict";

function DatesClass(day, date, event) {
	this.day = day;
	this.date = date;
	this.event = event;
}

DatesClass.prototype = {
	constructor: DatesClass,
	getDay: function() {
		return this.day;
	},
	getDate: function() {
		return this.date;
	},
	getEvent: function() {
		return this.event;
	}
};