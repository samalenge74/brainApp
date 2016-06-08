// Ionic brainApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'brainApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'brainApp.services' is found in services.js
// 'brainApp.controllers' is found in controllers.js
var db = null;
var remoteLink = 'http://192.168.0.63/brainApp/';
var subjects_content_download_link = '';
'use strict';

angular.module('brainApp', ['ionic', 'brainApp.controllers', 'brainApp.services', 'jett.ionic.filter.bar', 'ionic.contrib.ui.cards', 'ngCordova', 'ng-mfb', 'angularMoment', 'ionTogglePassword'])

.run(function($ionicPlatform, $ionicPopup, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  })
  
  // Disable BACK button on home
  $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: 'System warning',
        template: 'are you sure you want to exit?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);
})

.config(function($stateProvider, $urlRouterProvider, $provide) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  // Intro pages
   .state('intro', {
    url: '/',
    templateUrl: 'intro.html',
    controller: 'IntroCtrl'
  }) 
  
  .state("config", {
    url: "/config",
    templateUrl: "templates/config.html",
    controller: "ConfCtrl"
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
    
  .state('tab.forgotPassword', {
    url: '/forgotPassword',
    views: {
      'tab-login': {
        templateUrl: 'templates/forgotPassword.html',
        controller: 'FPassowrdCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/account.html',
      }
    }
  })
  
  .state('tab.deleteUser', {
    url: '/deleteUser',
    views: {
      'tab-account': {
        templateUrl: 'templates/deleteUser.html',
        controller: 'DeleteUserCtrl'
      }
    }
  })

  .state('tab.addUser', {
    url: '/addUser',
    views: {
      'tab-account': {
        templateUrl: 'templates/addUser.html',
        controller: 'AddUserCtrl'
      }
    }
  })


  .state('tab.support', {
      url: '/support',
      views: {
        'tab-support': {
          templateUrl: 'templates/support.html',
          controller: 'supportCtrl'
        }
      }
    })
  
  .state('eventmenu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    
     .state('eventmenu.subjects', {
        url: '/subjects',
        params: {
          'user' : null, 
          'name' : null,
          'grade': null   
        },
        views: {
          'menuContent' :{
            templateUrl: "templates/subjects.html",
            controller: "SubjCtrl"
          }
        }  
      })
    
    .state('eventmenu.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
          controller: "AboutCtrl"
        }
      }
    })
     
    .state('eventmenu.legal', {
      url: "/legal",
      views: {
        'menuContent' :{
          templateUrl: "templates/legal.html",
          controller: "LegalCtrl"
        }
      }
    })
    
  .state('eventmenu.faq', {
      url: "/faq",
      views: {
        'menuContent' :{
          templateUrl: "templates/faq.html"
          
        }
      }
    })

    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
  
  if(window.localStorage['didTutorial'] === "true") {
    $urlRouterProvider.otherwise('/config');
  }
  else{
    
    $urlRouterProvider.otherwise('/');
  }
  // if none of the above states are matched, use this as the fallback
 

});

