// Ionic brainApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'brainApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'brainApp.services' is found in services.js
// 'brainApp.controllers' is found in controllers.js
var db = null;
var remoteLink = 'http://192.168.0.63/brainApp/';
var appVersion = '0.0.0';
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

    if (window.cordova) {
        cordova.getAppVersion(function(version) {
            appVersion = version
            console.log(appVersion);
        });
    }

     if(window.cordova){
            db = $cordovaSQLite.openDB({ name: "brainApp.db", location:'default'});
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS users(student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER, date_status_last_checked TEXT)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS subjects (subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, version TEXT, filesize TEXT, icon TEXT, content_link TEXT, download_link TEXT, student_no TEXT)");
            
        }else{
            db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql("DROP TABLE IF EXISTS users");
                tx.executeSql("CREATE TABLE IF NOT EXISTS users (student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER, date_status_last_checked TEXT)");
                tx.executeSql("CREATE TABLE IF NOT EXISTS subjects ((subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, version TEXT, filesize TEXT, icon TEXT, content_link TEXT,  download_link TEXT, student_no TEXT");
            });
            
        }

        function success(dirEntry) {
            console.log("Directory Name: " + dirEntry.name);
        }

        function fail(dirEntry) {
            console.log("Unable to create new directory: " + dirEntry.name);
        }
        document.addEventListener("deviceready", function() { 
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs){
                fs.root.getDirectory("data", {create: true}, success, fail);
                fs.root.getDirectory("data/afr", {create: true}, success, fail);
                fs.root.getDirectory("data/eng", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad0", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad1", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad2", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad3", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade0", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade1", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade2", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade3", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Life Skills", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Life Skills", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Life Skills", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Creative Arts", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Economic and Management Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Creative Arts", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Economic and Management Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Creative Arts", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Economic and Management Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 English", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Natural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Social Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Accounting", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Afrikaans Eerste Addisionele Taal", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Agricultural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Business Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Computer Applications Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Consumer Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Economics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 English Home Language", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Geography", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 History", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Life Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Mathematical Literacy", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Physical Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Tourism", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Accounting", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Afrikaans Eerste Addisionele Taal", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Agricultural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Business Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Computer Applications Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Consumer Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Economics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 English Home Language", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Geography", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 History", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Life Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Mathematical Literacy", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Physical Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Tourism", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Accounting", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Afrikaans Eerste Addisionele Taal", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Agricultural Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Business Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Computer Applications Technology", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Consumer Studies", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Economics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 English Home Language", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Geography", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 History", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Life orientation", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Life Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Mathematical Literacy", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Physical Sciences", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Mathematics", {create: true}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Tourism", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Lewensvaardighede", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad4/Graad 4 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Lewensvaardighede", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad5/Graad 5 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Lewensvaardighede", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad6/Graad 6 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Ekonomiese en Bestuurswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Lewensorientering", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Skeppende Kunste", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Tegnologie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad7/Graad 7 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Ekonomiese en Bestuurswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Lewensorientering", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Skeppende Kunste", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Tegnologie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad8/Graad 8 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Afrikaans", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Ekonomiese en Bestuurswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Engels", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Lewensorientering", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Natuurwetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Skeppende Kunste", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Sosiale Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Tegnologie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad9/Graad 9 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Afrikaans Huistaal", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Besigheidstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Ekonomie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 English", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Fisiese Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Geografie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Geskiedenis", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Lewenswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Rekeningkunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Toerisme", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Verbruikerstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 10 Wiskunde geletterheid", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad10/Graad 11 Afrikaans Huistaal", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Besigheidstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Ekonomie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 English", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Fisiese Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Geografie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Geskiedenis", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Lewenswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Rekeningkunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Toerisme", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Verbruikerstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad11/Graad 11 Wiskunde geletterheid", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Afrikaans Huistaal", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Besigheidstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Ekonomie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 English", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Fisiese Wetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Geografie", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Geskiedenis", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Lewenswetenskappe", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Rekeningkunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Toerisme", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Verbruikerstudies", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Wiskunde", {create: true}, success, fail);
                fs.root.getDirectory("data/afr/Graad12/Graad 12 Wiskunde geletterheid", {create: true}, success, fail);
                
            });
        }, false);
    
  })
  
  // Disable BACK button on home
  $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: '',
        template: 'are you sure you want to exit?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);
})

.config(function($stateProvider, $urlRouterProvider, $provide, $ionicConfigProvider) {

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

    .state('eventmenu.contents', {
        url: '/contents',
        params: {
          'subject_name' : null,
          'dir': null,
          'unzip_dir' : null   
        },
        views: {
          'menuContent' :{
            templateUrl: "templates/contents.html",
            controller: "ContentsCtrl"
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

    $ionicConfigProvider.navBar.alignTitle('center')

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
    $urlRouterProvider.otherwise('/tab/login');
  }
  else{
    
    $urlRouterProvider.otherwise('/');
  }
  // if none of the above states are matched, use this as the fallback
 

});

