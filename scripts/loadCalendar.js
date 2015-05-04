/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 4/23/2015
 *   PROJECT: PPS Staff List
 *   TODO: Everything!
 */

"use strict";

/** @type {Array}.<string> */
var dates = [];

function setCalendarData() {
	/** @type {Array.<string>} */
	var lines = [],
		date = [];
	$.ajax({
		url: 'data/1415Calendar.csv',
		contentType: "text/csv",
		async: false,
		success: function(text) {
			lines = text.split(/\n/);
		}
	});
	for (var i = 0; i < lines.length; i++) {
		lines[i] = lines[i].replace(/(\r\n|\n|\r)/gm,"");
		date[i] = lines[i].split(",");
		dates[i] = new DatesClass(date[i][0], date[i][1], date[i][2]);
	}
	return dates;
}