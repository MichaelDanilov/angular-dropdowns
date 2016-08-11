'use strict';

var app = angular.module('app', ['ngDropdowns']);

app.controller('AppCtrl', function($scope) {
  $scope.ddSelectOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an Option"
  };

  $scope.ddMultiSelectOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      text: 'Option3',
      someprop: 'somevalue'
    }, {
      text: 'Option4',
      someprop: 'somevalue'
    }, {
      text: 'Option5',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMultiSelectSelected = [
    {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      text: 'Option5',
      someprop: 'somevalue'
    }
  ];

  $scope.ddMenuOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      iconCls: 'someicon'
    }, {
      text: 'Option2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected = {};
  $scope.ddMenuOptions2 = [
    {
      name: 'Option2-1 Name',
      iconCls: 'someicon'
    }, {
      name: 'Option2-2 Name'
    }, {
      divider: true
    }, {
      name: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected2 = {};
  $scope.ddMenuOptions3 = [
    {
      text: 'Option3-1',
      iconCls: 'someicon'
    }, {
      text: 'Option3-2'
    }, {
      divider: true
    }, {
      text: 'A link',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddMenuSelected3 = {};
});
