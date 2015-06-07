// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('socialdotio', ['ionic', 'ionic-material', 'starter.controllers', 'ionMdInput', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.contacts', {
        url: '/contacts',
        views: {
            'menuContent': {
                templateUrl: 'templates/contacts.html',
                controller: 'contactsCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.phrases" id="fab-contacts" class="button button-fab button-fab-top-right expanded button-stable-900"><i class="icon ion-android-done"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-activity').classList.toggle('on');
                //     }, 200);
                // }
            }
        }
    })

    .state('app.phrases', {
        url: '/phrases',
        views: {
            'menuContent': {
                templateUrl: 'templates/phrases.html',
                controller: 'phrasesCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.timing" id="fab-phrases" class="button button-fab button-fab-top-right expanded button-calm-900"><i class="icon ion-android-done"></i></button>',
                // controller: function ($timeout) {
                //     $timeout(function () {
                //         document.getElementById('fab-activity').classList.toggle('on');
                //     }, 200);
                // }
            }
        }
    })

    .state('app.timing', {
        url: '/timing',
        views: {
            'menuContent': {
                templateUrl: 'templates/timing.html',
                controller: 'timingCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.contacts" id="fab-timing" class="button button-fab button-fab-top-right expanded button-calm-900"><i class="icon ion-android-done-all"></i></button>',
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/contacts');
});
