/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 4/23/2015
 *   PROJECT: PPS Staff List
 *   TODO: Everything!
 */

(function() {
	"use strict";

	angular.module('districtApp')
		.controller('DistrictCtrl', MainCtrl);

	function MainCtrl($scope) {
		$scope.staff = setStaffData();
		$scope.calendar = setCalendarData();

		/** @type {Boolean} */
		$scope.showStaff = false,
		$scope.showCalendar = true;

		$scope.filterByBuilding = function(building) {
			$scope.filterBuilding = building;
			$scope.showStaff = true;
			$scope.showCalendar = false;
		};
	}
})();
