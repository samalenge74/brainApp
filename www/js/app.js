// Ionic brainApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'brainApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'brainApp.services' is found in services.js
// 'brainApp.controllers' is found in controllers.js
var db = null;
var remoteLink = 'http://1102.168.0.63/brainApp/';
var appVersion = '0.0.0';
'use strict';

angular.module('brainApp', ['ionic', 'brainApp.controllers', 'brainApp.services', 'jett.ionic.filter.bar', 'ionic.contrib.ui.cards', 'ngCordova', 'ng-mfb', 'angularMoment', 'ionTogglePassword'])

.run(function($ionicPlatform, $ionicPopup, $cordovaSQLite, $cordovaFile) {
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

        /*if (window.cordova) {
            cordova.getAppVersion.getVersionNumber(function(version) {
                appVersion = version
                console.log(appVersion);
            });
        }*/

        if (window.cordova && window.SQLitePlugin) {
            db = $cordovaSQLite.openDB({ name: "brainApp.db", location: 'default' });
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS users(student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER, date_status_last_checked TEXT)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS subjects (subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, version TEXT, filesize TEXT, icon TEXT, content_link TEXT, download_link TEXT, student_no TEXT)");

        } else {
            db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
            db.transaction(function(tx) {
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
            // CREATE
            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad0", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad1", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad2", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad3", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade0", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade1", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade2", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade3", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade0/Grade R", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade1/Grade 1 Content", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade2/Grade 2 Content", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade3/Grade 3 Content", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Graad0/Graad R", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad1/Graad 1 inhoud", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad2/Graad 2 inhoud", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad3/Graad 3 inhoud", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 Life Skills", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade4/Grade 4 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 Life Skills", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade5/Grade 5 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 Life Skills", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade6/Grade 6 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Creative Arts", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Economic and Management Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Life Orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade7/Grade 7 Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Creative Arts", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Economic and Management Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Life Orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade8/Grade 8 Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Creative Arts", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Economic and Management Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Life Orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Natural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Social Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade9/Grade 9 Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Accounting", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Afrikaans Eerste Addisionele Taal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Agricultural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Business Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Computer Applications Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Consumer Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Economics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 English Home Language", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Geography", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 History", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Life orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Life Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Mathematical Literacy", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Physical Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade10/Grade 10 Tourism", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Accounting", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Afrikaans Eerste Addisionele Taal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Agricultural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Business Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Computer Applications Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Consumer Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Economics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 English Home Language", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Geography", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 History", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Life orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Life Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Mathematical Literacy", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Physical Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade11/Grade 11 Tourism", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Accounting", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Afrikaans Eerste Addisionele Taal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Agricultural Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Business Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Computer Applications Technology", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Consumer Studies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Economics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 English Home Language", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Geography", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 History", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Life orientation", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Life Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Mathematical Literacy", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Mathematics", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Physical Sciences", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "eng/Grade12/Grade 12 Tourism", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Lewensvaardighede", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad4/Graad 4 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Lewensvaardighede", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad5/Graad 5 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Lewensvaardighede", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad6/Graad 6 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Ekonomiese en Bestuurswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Lewensorientering", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Skeppende Kunste", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Tegnologie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad7/Graad 7 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Ekonomiese en Bestuurswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Lewensorientering", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Skeppende Kunste", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Tegnologie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad8/Graad 8 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Afrikaans", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Ekonomiese en Bestuurswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Engels", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Lewensorientering", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Natuurwetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Skeppende Kunste", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Sosiale Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Tegnologie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad9/Graad 9 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Afrikaans Huistaal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Besigheidstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Ekonomie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Fisiese Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Geografie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Geskiedenis", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Lewenswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Rekeningkunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Toerisme", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Verbruikerstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad10/Graad 10 Wiskunde geletterheid", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Afrikaans Huistaal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Besigheidstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Ekonomie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Fisiese Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Geografie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Geskiedenis", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Lewenswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Rekeningkunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Toerisme", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Verbruikerstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad11/Graad 11 Wiskunde geletterheid", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });


            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Afrikaans Huistaal", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Besigheidstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Ekonomie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 English", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Fisiese Wetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Geografie", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Geskiedenis", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Lewenswetenskappe", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Rekeningkunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Toerisme", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Verbruikerstudies", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Wiskunde", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });

            $cordovaFile.createDir(cordova.file.externalDataDirectory, "afr/Graad12/Graad 12 Wiskunde geletterheid", false)
                .then(function(success) {
                    console.log(JSON.stringify("Directory Created: " + success));
                }, function(error) {
                    console.log(JSON.stringify("Directory Failed: " + error));
                });



        });

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
            'user': null,
            'name': null,
            'grade': null
        },
        views: {
            'menuContent': {
                templateUrl: "templates/subjects.html",
                controller: "SubjCtrl"
            }
        }
    })

    .state('eventmenu.contents', {
        url: '/contents',
        params: {
            'subject_name': null,
            'dir': null,
            'unzip_dir': null
        },
        views: {
            'menuContent': {
                templateUrl: "templates/contents.html",
                controller: "ContentsCtrl"
            }
        }
    })

    .state('eventmenu.about', {
        url: "/about",
        views: {
            'menuContent': {
                templateUrl: "templates/about.html",
                controller: "AboutCtrl"
            }
        }
    })

    .state('eventmenu.legal', {
        url: "/legal",
        views: {
            'menuContent': {
                templateUrl: "templates/legal.html",
                controller: "LegalCtrl"
            }
        }
    })

    .state('eventmenu.faq', {
        url: "/faq",
        views: {
            'menuContent': {
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

    if (window.localStorage['didTutorial'] === "true") {
        $urlRouterProvider.otherwise('/tab/login');
    } else {

        $urlRouterProvider.otherwise('/');
    }
    // if none of the above states are matched, use this as the fallback

});