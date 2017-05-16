'use strict';
var app = angular.module('havenapp', ['ngMaterial']);
app.controller('contactusctrl', function ($scope, $http) {

	var me = this;
    me.data = null;
    me.selectedItem = null;
    me.searchText = null;

    me.locLookUp = function (q) {
       $http.get('https://previewme.bbtdevelopment.com/api/v1/static/autocomplete/location?q=' + escape(q) + '&country_id=156')
       .then(function(response) {
          me.data = response.data.data;
          return response.data.data;
        });
    }


});
