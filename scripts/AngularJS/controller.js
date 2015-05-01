/**
 *   AUTHOR: hbates@northmen.org
 *   VERSION: 1.0
 *   CREATED: 4/23/2015
 *   PROJECT: PPS Staff List
 *   TODO: Everything!
 */

(function() {
	"use strict";

	angular.module('staffApp')
		.controller('StaffListCtrl', MainCtrl);

	function MainCtrl($scope) {
		$scope.staff = setStaffData();

		$scope.filterByBuilding = function(building) {
			$scope.filterBuilding = building;
		};
	}
})();
