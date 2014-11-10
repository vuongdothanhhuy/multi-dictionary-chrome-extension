'use strict';

console.log('\'Allo \'Allo! Popup');


angular.module('myApp', [])
    .controller('popupController', ['$scope',
        function($scope) {
            $scope.config = {

            };

            $scope.saveConfig = function() {
                chrome.storage.sync.set($scope.config, function() {
                    //
                });
            };

            function loadConfig() {
                chrome.storage.sync.get(DEFAULT_CONFIGS, function(savedConfigs) {
                    $scope.config = savedConfigs;
                });
            };

            loadConfig();
        }
    ]);
