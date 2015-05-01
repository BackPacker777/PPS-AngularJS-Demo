/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 04.09.2015
 *   ASSIGNMENT: PPS Demo
 *   TODO:
 */

"use strict";

function PersonClass(building, lastName, firstName, job, subject, grade, phone, email) {
	this.building = building;
	this.lastName = lastName;
	this.firstName = firstName;
	this.job = job;
	this.subject = subject;
	this.grade = grade;
	this.phone = phone;
	this.email = email;
}

PersonClass.prototype = {
	constructor: PersonClass,
	getBuilding: function() {
		return this.building;
	},
	getLastName: function() {
		return this.lastName;
	},
	getFirstName: function() {
		return this.firstName;
	},
	getJob: function() {
		return this.job;
	},
	getSubject: function() {
		return this.subject;
	},
	getGrade: function() {
		return this.grade;
	},
	getPhone: function() {
		return this.phone;
	},
	getEmail: function() {
		return this.email;
	}
};
