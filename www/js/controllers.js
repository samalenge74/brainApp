var subjects_content_download_link = '/home/mybrainline/googledrive/DVD/';
var moms = 'KLJKjlH988989h89Hp98hpjhgFG786GF6gKJBB7878GLGjbLJ';

angular.module('brainApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the Dashboard
  $scope.startApp = function() {
    $state.go('config');

    // Set a flag that we finished the tutorial
    window.localStorage['didTutorial'] = true;
  };
  
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  
   // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  
    //No this is silly
  // Check if the user already did the tutorial and skip it if so

  
})
.controller('ConfCtrl', function($scope, $ionicLoading, $cordovaSQLite, $location, $ionicHistory, $ionicPlatform){
    $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
    })
    
    $ionicPlatform.ready(function(){
        if(window.cordova){
            db = $cordovaSQLite.openDB({ name: "brainApp.db", location:'default'});
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS users(student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER, date_status_last_checked TEXT)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS subjects (subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, version TEXT, filesize TEXT, icon TEXT, content_link TEXT, student_no TEXT)");
            $location.path("/tab/login");
            
        }else{
            db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql("DROP TABLE IF EXISTS users");
                tx.executeSql("CREATE TABLE IF NOT EXISTS users (student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER, date_status_last_checked TEXT)");
                tx.executeSql("CREATE TABLE IF NOT EXISTS subjects ((subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, version TEXT, filesize TEXT, icon TEXT, content_link TEXT, student_no TEXT");
            });
            $location.path("/tab/login");
            
        }

        function success(dirEntry) {
            console.log("Directory Name: " + dirEntry.name);
        }

        function fail(error) {
            console.log("Unable to create new directory: " + error.code);
        }
        document.addEventListener("deviceready", function() { 
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs){
                fs.root.getDirectory("data", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad0", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad1", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad2", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad3", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad4", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad5", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad6", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad7", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad8", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad9", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad10", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad11", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/afr/Graad12", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade0", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade1", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade2", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade3", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Life Skills", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade4/Grade 4 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Life Skills", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade5/Grade 5 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Life Skills", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade6/Grade 6 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Creative Arts", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Economic and Management Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade7/Grade 7 Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Creative Arts", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Economic and Management Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade8/Grade 8 Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Creative Arts", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Economic and Management Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Natural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Social Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade9/Grade 9 Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Accounting", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Afrikaans Eerste Addisionele Taal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Agricultural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Business Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Computer Applications Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Consumer Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Economics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 English Home Language", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Geography", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 History", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Life Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Mathematical Literacy", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Physical Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Tourism", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade10/Grade 10 Accounting", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Afrikaans Eerste Addisionele Taal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Agricultural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Business Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Computer Applications Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Consumer Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Economics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 English Home Language", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Geography", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 History", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Life Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Mathematical Literacy", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Physical Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade11/Grade 11 Tourism", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Accounting", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Afrikaans Eerste Addisionele Taal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Agricultural Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Business Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Computer Applications Technology", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Consumer Studies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Economics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 English Home Language", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Geography", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 History", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Life orientation", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Life Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Mathematical Literacy", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Physical Sciences", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Mathematics", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Grade12/Grade 12 Tourism", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Lewensvaardighede", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad4/Graad 4 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Lewensvaardighede", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad5/Graad 5 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Lewensvaardighede", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad6/Graad 6 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Ekonomiese en Bestuurswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Lewensorientering", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Skeppende Kunste", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Tegnologie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad7/Graad 7 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Ekonomiese en Bestuurswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Lewensorientering", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Skeppende Kunste", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Tegnologie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad8/Graad 8 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Afrikaans", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Ekonomiese en Bestuurswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Engels", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Lewensorientering", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Natuurwetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Skeppende Kunste", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Sosiale Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Tegnologie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad9/Graad 9 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Afrikaans Huistaal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Besigheidstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Ekonomie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Fisiese Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Geografie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Geskiedenis", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Lewenswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Rekeningkunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Toerisme", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Verbruikerstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 10 Wiskunde geletterheid", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad10/Graad 11 Afrikaans Huistaal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Besigheidstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Ekonomie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Fisiese Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Geografie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Geskiedenis", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Lewenswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Rekeningkunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Toerisme", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Verbruikerstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad11/Graad 11 Wiskunde geletterheid", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Afrikaans Huistaal", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Besigheidstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Ekonomie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 English", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Fisiese Wetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Geografie", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Geskiedenis", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Lewenswetenskappe", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Rekeningkunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Toerisme", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Verbruikerstudies", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Wiskunde", {create: true, exclusive: false}, success, fail);
                fs.root.getDirectory("data/eng/Graad12/Graad 12 Wiskunde geletterheid", {create: true, exclusive: false}, success, fail);
                
            });
        }, false);
        
    })
})
.controller('MainCtrl', function($scope, $state,  $ionicHistory, $ionicSideMenuDelegate, $ionicPopup) {
    
    $scope.$on('$ionicView.loaded', function(){
        ionic.Platform.ready(function(){
            if(navigator && navigator.splashscreen)
                navigator.splashscreen.hide();
        });
    });
    
     $scope.logout = function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $state.go('tab.login');
    };
    
    $scope.subjects = function(){
        $state.go('eventmenu.subjects')
    }
  
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.showAlert = function() {
      $ionicPopup.alert({
        title: 'Alert',
        content: 'Coming Soon!!!'
      }).then(function(res) {
        console.log('Test Alert Box');
      });
    };

    $scope.navTitle='<img class="title-image" src="img/icon.png" />';
    
    
})
.controller('LoginCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, $ionicPopup, $cordovaDialogs, $ionicPlatform, $filter) {

    function dateDiffInDays(a, b){
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;

        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    function diffDays(d1){
        var eventE = new Date(d1);
        var today =  new Date();
        return dateDiffInDays(today, eventE);
    }

    $scope.login = function(snumber, password) {
        $scope.data = [];
        var snum = '';
        var stName = '';
        var gd = '';
        var pass = '';
        var result = '';
        var date_status_last_checked ='';
                
        $cordovaSQLite.execute(db, "SELECT student_no, name, password, grade, date_status_last_checked FROM users where student_no = ? and password = ?", [snumber, password]).then(function(res){
            
            if(res.rows.length > 0){
               
                snum = res.rows.item(0).student_no;
                pass = res.rows.item(0).password;
                stName = res.rows.item(0).name;
                gd = res.rows.item(0).grade;
                date_status_last_checked = $filter('date')(new Date(res.rows.item(0).date_status_last_checked), 'dd-MM-yyyy');
                result = { user: snum, name: stName, grade: gd};
                var now = $filter('date')(new Date(), 'dd-MM-yyyy');
                var daysDiff = diffDays(date_status_last_checked);
                
                $ionicLoading.hide();
                $scope.snumber = null;
                $scope.password = null;
                
                $state.go('eventmenu.subjects', result);

            } else {
                    console.log(snumber+' '+password);
                $ionicLoading.hide();
                $ionicPopup.alert({
                    template: 'Either the s-number/password is incorrect',
                });
                
            } 
        });// end of execute
  
    }; 

})
.controller('AddUserCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, activateAccount, getSubjects, $ionicPopup, $cordovaDialogs, $filter, getSubjectsContents){

    $scope.userDetails = [];
    $scope.subjecstDetails = [];
    $scope.status;
    $scope.user;
    $scope.snumber = "";
    $scope.password = "";

    var status_date = $filter('date')(new Date(), 'dd-MM-yyyy');

    var i = 0; var snum = ''; var stName = ''; var gd = ''; var ac_year = ''; var email =  ''; var gender = ''; var old_status = ''; var paid = ''; var sync_status = ''; var pass = ''; var ac_year_from = ''; var ac_year_to = ''; var status = ''; 
    
    function checkConnection() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        return states[networkState];
    }; 

    $scope.addUser = function(username, password){
        
        var internet_conn = checkConnection();
        var u = username;
        var p = password;

        switch(internet_conn){
            case "No network connection":
                $ionicPopup.alert({
                    title:'You need internet connection!!!'
                });
            break;
                
            case "Cell 2G connection":
            case "Cell 3G connection":
            case "Cell 4G connection":
            case "Cell generic connection":
                // A confirm dialog
               
                var confirmPopup = $ionicPopup.confirm({
                    title: ''+internet_conn,
                    template: 'Are you sure you want to use your mobile data?'
                });

                confirmPopup.then(function(res) {
                    if(res) { // if yes
                        $ionicLoading.show({
                            animation: 'fade-in',
                            showDelay: 0,
                            noBackdrop: true,
                            templateUrl: 'checking.html'
                        });
                    
                           // var query = ;
                            $cordovaSQLite.execute(db, "SELECT student_no FROM users where student_no = ? and password = ?", [u, p]).then(function(res){
                                console.log(JSON.stringify(res.data, null, 4));
                                if(res.rows.length > 0){
                                    $ionicLoading.hide();
                                    $scope.showAlert = function() {
                                        var alertPopup = $ionicPopup.alert({
                                            title: 'Try again later!',
                                            template: 'User Already Exist.'
                                        });
                                        
                                        alertPopup.then(function(res) {
                                            console.log('User already exists.');
                                        });
                                    };
                                } else {
                                    
                                    $ionicLoading.show({
                                        animation: 'fade-in',
                                        showDelay: 0,
                                        noBackdrop: true,
                                        templateUrl: 'activating.html'
                                    });
                                    
                                   
                                    activateAccount.getDetails(u).then(function(user){
                                        
                                        $scope.userDetails = user.data;
                                        
                                        if($scope.userDetails.length > 0){
                                            
                                            // user details
                                            
                                            snum = $scope.userDetails[0].student_no;
                                            stName = $scope.userDetails[0].name;
                                            gd = $scope.userDetails[0].grade;
                                            var lang = gd.substr(0, 5);
                                            var n = gd.substr(5, 1);
                                            gd1 = lang+" "+n;
                                            if (lang == 'Grade'){
                                                lang = 'eng';
                                            }else{
                                                lang = 'afr';
                                            }

                                            ac_year = $scope.userDetails[0].student_academicyear;
                                            email =  $scope.userDetails[0].student_email;
                                            gender = $scope.userDetails[0].student_sex;
                                            old_status = $scope.userDetails[0].OLD_student_status;
                                            paid = $scope.userDetails[0].student_paid;
                                            sync_status = $scope.userDetails[0].brainonline_sync_status;
                                            pass = $scope.userDetails[0].password;
                                            ac_year_from = $scope.userDetails[0].academic_year_from_date;
                                            ac_year_to = $scope.userDetails[0].academic_year_to_date
                                            status = $scope.userDetails[0].student_status;

                                            if (p === pass) {
                                                // Insert into user new user details
                                      
                                                var query = 'INSERT INTO users (student_no, name, grade, password, student_email, academic_year,  year_from, year_to, gender, status, OLD_student_status, student_paid, brainonline_sync_status, date_status_last_checked) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                                                $cordovaSQLite.execute(db, query, [snum, stName, gd1, pass, email, ac_year, ac_year_from, ac_year_to, gender, status, old_status, paid, sync_status, status_date]).then(function(res){
                                                    
                                                    getSubjects.getDetails(snum).then(function(det){
                                                        $scope.subjecstDetails = det.data;
                                                        
                                                        var s = 0;
                                                        var icon = '';
                                                        for (var i = 0; i < $scope.subjecstDetails.length; i++){
                                                            
                                                            var subj_id = $scope.subjecstDetails[i].subject_id; 
                                                            var subj_name = $scope.subjecstDetails[i].subject_name; 
                                                            var subj_desc = $scope.subjecstDetails[i].subject_description; 
                                                            var subj_lastupdate_date = $scope.subjecstDetails[i].subject_lastupdate_date; 
                                                            var subj_added_date = $scope.subjecstDetails[i].subject_added_date; 
                                                            var subj_app_name = $scope.subjecstDetails[i].subject_old_dvd_name;
                                                            var subj_version = $scope.subjecstDetails[i].version;
                                                            var subj_filesize = $scope.subjecstDetails[i].filesize; 
                                                            var yr = new Date().getFullYear();
                                                            var downloadLink = subjects_content_download_link+yr+"/"+lang+"/"+gd+"/"+subj_name
                                                            var link_to_content = "Data/"+lang+"/"+gd+"/"+subj_name;

                                                            switch(subj_name){
                                                                case 'English Home Language': 
                                                                case 'English First Additional Language':
                                                                    icon = 'img/icons/1.png';
                                                                break;

                                                                case 'Afrikaans Huistaal': 
                                                                case 'Afrikaans Eerste Addisionele Taal':
                                                                    icon = 'img/icons/2.png';
                                                                break;

                                                                case 'Wiskunde': 
                                                                case 'Mathematics': 
                                                                case 'Wiskundige Geletterdheid': 
                                                                case 'Mathematical Literacy':
                                                                    icon = 'img/icons/3.png';
                                                                break;

                                                                case 'Lewensoriëntering': 
                                                                case 'Life Orientation':
                                                                    icon = 'img/icons/4.png';
                                                                break;

                                                                case 'Natuurwetenskappe':
                                                                case 'Natural Sciences':
                                                                    icon = 'img/icons/18.png';
                                                                break;

                                                                case 'Skeppende Kunste':
                                                                case 'Creative Arts':
                                                                    icon = 'img/icons/19.png';
                                                                break;

                                                                case 'Sosiale Wetenskappe':
                                                                case 'Social Sciences':
                                                                    icon = 'img/icons/20.png';
                                                                break;
 
                                                                case 'Rekeningkunde': 
                                                                case 'Accounting':
                                                                    icon = 'img/icons/5.png';
                                                                break;

                                                                case 'Agricultural Sciences':
                                                                    icon = 'img/icons/6.png';
                                                                break;

                                                                case 'Tegnologie':
                                                                case 'Technology':
                                                                    icon = 'img/icons/21.png';
                                                                break;


                                                                case 'Besigheidstudies':
                                                                case 'Business Studies':
                                                                    icon = 'img/icons/7.png';
                                                                break;

                                                                case 'Computer Applications Technology':
                                                                    icon = 'img/icons/8.png';
                                                                break;

                                                                case 'Ekonomie':
                                                                case 'Economics':
                                                                case 'Economic and Management Sciences':
                                                                case 'Ekonomiese en Bestuurswetenskappe':
                                                                    icon = 'img/icons/9.png';
                                                                break;

                                                                case 'Fisiese Wetenskappe':
                                                                case 'Physical Sciences':
                                                                    icon = 'img/icons/10.png';
                                                                break;

                                                                case 'Geografie':
                                                                case 'Geography':
                                                                    icon = 'img/icons/11.png';
                                                                break;

                                                                case 'Geskiedenis': 
                                                                case 'History':
                                                                    icon = 'img/icons/12.png';
                                                                break;

                                                                case 'Ingenieursgrafika en Ontwerp':
                                                                case 'Engineering Graphics and Design':
                                                                    icon = 'img/icons/13.png';
                                                                break;

                                                                case 'Lewenswetenskappe': 
                                                                case 'Life Sciences':
                                                                    icon = 'img/icons/14.png';
                                                                break;

                                                                case 'Toerisme':
                                                                case 'Tourism':
                                                                    icon = 'img/icons/15.png';
                                                                break;

                                                                case 'Verbruikerstudies':
                                                                case 'Consumer Studies':
                                                                    icon = 'img/icons/16.png';
                                                                break;

                                                                case 'IsiZulu First Additional Language':
                                                                    icon = 'img/icons/17.png';
                                                                break;

                                                                case 'default':
                                                                    icon = '';
                                                                break;

                                                            }
                                                        
                                                            var q = 'INSERT INTO subjects (subject_id, name, description, lastupdate_date, added_date, subject_app_name, version, filesize, icon, content_link, student_no) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                                                            $cordovaSQLite.execute(db, q, [subj_id, subj_name, subj_desc, subj_lastupdate_date, subj_added_date, subj_app_name, subj_version, subj_filesize, icon, link_to_content, snum]).then(function(r){

                                                                console.log(downloadLink);
                                                                console.log(link_to_content);
                                                            }, function(error){
                                                                $ionicLoading.hide(); 
                                                                console.log(error);
                                                            });
                                                            
                                                            s++;
                                                            
                                                        }

                                                        if (s == $scope.subjecstDetails.length){
                                                                $ionicLoading.hide();
                                                                $scope.snumber = null;
                                                                $scope.password = null;
                                                                var alertPopup = $ionicPopup.alert({
                                                                                title: 'Congratulations',
                                                                                template: 'Account successfully activated.'
                                                                            });
                                                                            
                                                                            alertPopup.then(function(res) {
                                                                                $state.go('tab.login');
                                                                                
                                                                            }, function(error){
                                                                                    console.log(error);
                                                                            });
                                                        }else{
                                                            $ionicLoading.hide();
                                                            var alertPopup = $ionicPopup.alert({
                                                                                title: 'Alert!!!!',
                                                                                template: 'There was a problem loading your subjects.'
                                                                            });
                                                                            
                                                                            alertPopup.then(function(res) {
                                                                                $state.go('tab.login');
                                                                                
                                                                            }, function(error){
                                                                                    console.log(error);
                                                                            });
                                                        }
                                                
                                                                                                                    
                                                    }, function (err) {
                                                        $ionicLoading.hide(); 
                                                        console.error(err);
                                                    }); // end of getDetails Subjects
                                                    
                                                   
                                                
                                                                
                                                }, function(error){
                                                    $ionicLoading.hide();
                                                    var alertPopup = $ionicPopup.alert({
                                                                    title: 'Alert!!!!',
                                                                    template: 'Account activation failed, please contact Brainline @ 012 543 5000.'
                                                                });
                                                                
                                                                alertPopup.then(function(res) {
                                                                    $state.go('tab.account');
                                                                }, function(error){
                                                                        console.log(error);
                                                                });
                                                    console.log(error);
                                                });   

                                            }else{
                                                $ionicLoading.hide();
                                                var alertPopup = $ionicPopup.alert({
                                                                title: 'Alert!!!!',
                                                                template: 'Either username/password is wrong.'
                                                            });
                                                            
                                                            alertPopup.then(function(res) {
                                                                $state.go('tab.account');
                                                            }, function(error){
                                                                    
                                                                    console.log(error);
                                                            });
                                                            
                                                console.log("No connecttion to db....");
                                            }
                                            
                                            
                                        
                                        }else{
                                            $ionicLoading.hide();
                                            var alertPopup = $ionicPopup.alert({
                                                            title: 'Alert!!!!',
                                                            template: 'Adding account failed, Check that you entered the correct s-number/password.'
                                                        });
                                                        
                                                        alertPopup.then(function(res) {
                                                            $state.go('tab.account');
                                                        }, function(error){
                                                                
                                                                console.log(error);
                                                        });
                                                        
                                            console.log("No connecttion to db....");
                                        }

                                    }, function(error){
                                                                    
                                            console.log(error);
                                    });
                                } // end of 1st else
                            }, function(error){
                                                                
                                console.log(error);
                            });  // end of sql execute  

                    } else {
                        console.log('You are not sure');
                    }
                });
                
            break;
            
            case "WiFi connection":
                // A confirm dialog
               
                var confirmPopup = $ionicPopup.confirm({
                    title: ''+internet_conn,
                    template: 'Are you sure you want to use this wifi connection?'
                });

                 confirmPopup.then(function(res) {
                    if(res) { // if yes
                        $ionicLoading.show({
                            animation: 'fade-in',
                            showDelay: 0,
                            noBackdrop: true,
                            templateUrl: 'checking.html'
                        });
                    
                            var query = "SELECT student_no FROM users where student_no = ? and password = ?";
                            $cordovaSQLite.execute(db, query, [u, p]).then(function(res){
                               
                                if(res.rows.length > 0){
                                    $ionicLoading.hide();
                                    $scope.showAlert = function() {
                                        var alertPopup = $ionicPopup.alert({
                                            title: 'Try again later!',
                                            template: 'User Already Exist.'
                                        });
                                        
                                        alertPopup.then(function(res) {
                                            console.log('User already exists.');
                                        });
                                    };
                                } else {
                                    
                                    $ionicLoading.show({
                                        animation: 'fade-in',
                                        showDelay: 0,
                                        noBackdrop: true,
                                        templateUrl: 'activating.html'
                                    });
                                    
                                    activateAccount.getDetails(u).then(function(user){
                                        
                                        $scope.userDetails = user.data;
                                        
                                        if($scope.userDetails.length > 0){
                                            
                                            // user details
                                            
                                            snum = $scope.userDetails[0].student_no;
                                            stName = $scope.userDetails[0].name;
                                            gd = $scope.userDetails[0].grade;
                                            var lang = gd.substr(0, 5);
                                            var n = gd.substr(5, 1);
                                            gd1 = lang+" "+n;
                                            if (lang == 'Grade'){
                                                lang = 'Eng';
                                            }else{
                                                lang = 'Afr';
                                            }

                                            ac_year = $scope.userDetails[0].student_academicyear;
                                            email =  $scope.userDetails[0].student_email;
                                            gender = $scope.userDetails[0].student_sex;
                                            old_status = $scope.userDetails[0].OLD_student_status;
                                            paid = $scope.userDetails[0].student_paid;
                                            sync_status = $scope.userDetails[0].brainonline_sync_status;
                                            pass = $scope.userDetails[0].password;
                                            ac_year_from = $scope.userDetails[0].academic_year_from_date;
                                            ac_year_to = $scope.userDetails[0].academic_year_to_date
                                            status = $scope.userDetails[0].student_status;

                                            if (p === pass) {
                                                // Insert into user new user details
                                      
                                                var query = 'INSERT INTO users (student_no, name, grade, password, student_email, academic_year,  year_from, year_to, gender, status, OLD_student_status, student_paid, brainonline_sync_status, date_status_last_checked) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                                                $cordovaSQLite.execute(db, query, [snum, stName, gd1, pass, email, ac_year, ac_year_from, ac_year_to, gender, status, old_status, paid, sync_status, status_date]).then(function(res){

                                                    getSubjects.getDetails(snum).then(function(det){
                                                        $scope.subjecstDetails = det.data;
                                                        
                                                        var s = 0;
                                                        var icon = '';
                                                        for (var i = 0; i < $scope.subjecstDetails.length; i++){
                                                            
                                                            var subj_id = $scope.subjecstDetails[i].subject_id; 
                                                            var subj_name = $scope.subjecstDetails[i].subject_name; 
                                                            var subj_desc = $scope.subjecstDetails[i].subject_description; 
                                                            var subj_lastupdate_date = $scope.subjecstDetails[i].subject_lastupdate_date; 
                                                            var subj_added_date = $scope.subjecstDetails[i].subject_added_date; 
                                                            var subj_app_name = $scope.subjecstDetails[i].subject_old_dvd_name;
                                                            var subj_version = $scope.subjecstDetails[i].version;
                                                            var subj_filesize = $scope.subjecstDetails[i].filesize; 
                                                            var yr = new Date().getFullYear();
                                                            var downloadLink = subjects_content_download_link+yr+"/"+lang+"/"+gd+"/"+subj_name
                                                            var link_to_content = "Data/"+lang+"/"+gd+"/"+subj_name;

                                                            switch(subj_name){
                                                                case 'English Home Language': 
                                                                case 'English First Additional Language':
                                                                    icon = 'img/icons/1.png';
                                                                break;

                                                                case 'Afrikaans Huistaal': 
                                                                case 'Afrikaans Eerste Addisionele Taal':
                                                                    icon = 'img/icons/2.png';
                                                                break;

                                                                case 'Wiskunde': 
                                                                case 'Mathematics': 
                                                                case 'Wiskundige Geletterdheid': 
                                                                case 'Mathematical Literacy':
                                                                    icon = 'img/icons/3.png';
                                                                break;

                                                                case 'Lewensoriëntering': 
                                                                case 'Life Orientation':
                                                                    icon = 'img/icons/4.png';
                                                                break;

                                                                case 'Natuurwetenskappe':
                                                                case 'Natural Sciences':
                                                                    icon = 'img/icons/18.png';
                                                                break;

                                                                case 'Skeppende Kunste':
                                                                case 'Creative Arts':
                                                                    icon = 'img/icons/19.png';
                                                                break;

                                                                case 'Sosiale Wetenskappe':
                                                                case 'Social Sciences':
                                                                    icon = 'img/icons/20.png';
                                                                break;
 
                                                                case 'Rekeningkunde': 
                                                                case 'Accounting':
                                                                    icon = 'img/icons/5.png';
                                                                break;

                                                                case 'Agricultural Sciences':
                                                                    icon = 'img/icons/6.png';
                                                                break;

                                                                case 'Tegnologie':
                                                                case 'Technology':
                                                                    icon = 'img/icons/21.png';
                                                                break;


                                                                case 'Besigheidstudies':
                                                                case 'Business Studies':
                                                                    icon = 'img/icons/7.png';
                                                                break;

                                                                case 'Computer Applications Technology':
                                                                    icon = 'img/icons/8.png';
                                                                break;

                                                                case 'Ekonomie':
                                                                case 'Economics':
                                                                case 'Economic and Management Sciences':
                                                                case 'Ekonomiese en Bestuurswetenskappe':
                                                                    icon = 'img/icons/9.png';
                                                                break;

                                                                case 'Fisiese Wetenskappe':
                                                                case 'Physical Sciences':
                                                                    icon = 'img/icons/10.png';
                                                                break;

                                                                case 'Geografie':
                                                                case 'Geography':
                                                                    icon = 'img/icons/11.png';
                                                                break;

                                                                case 'Geskiedenis': 
                                                                case 'History':
                                                                    icon = 'img/icons/12.png';
                                                                break;

                                                                case 'Ingenieursgrafika en Ontwerp':
                                                                case 'Engineering Graphics and Design':
                                                                    icon = 'img/icons/13.png';
                                                                break;

                                                                case 'Lewenswetenskappe': 
                                                                case 'Life Sciences':
                                                                    icon = 'img/icons/14.png';
                                                                break;

                                                                case 'Toerisme':
                                                                case 'Tourism':
                                                                    icon = 'img/icons/15.png';
                                                                break;

                                                                case 'Verbruikerstudies':
                                                                case 'Consumer Studies':
                                                                    icon = 'img/icons/16.png';
                                                                break;

                                                                case 'IsiZulu First Additional Language':
                                                                    icon = 'img/icons/17.png';
                                                                break;

                                                                case 'default':
                                                                    icon = '';
                                                                break;

                                                            }
                                                        
                                                            var q = 'INSERT INTO subjects (subject_id, name, description, lastupdate_date, added_date, subject_app_name, version, filesize, icon, content_link, student_no) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                                                            $cordovaSQLite.execute(db, q, [subj_id, subj_name, subj_desc, subj_lastupdate_date, subj_added_date, subj_app_name, subj_version, subj_filesize, icon, link_to_content, snum]).then(function(r){

                                                                console.log(downloadLink);
                                                                console.log(link_to_content);
                                                            }, function(error){
                                                                $ionicLoading.hide(); 
                                                                console.log(error);
                                                            });
                                                            
                                                            s++;
                                                            
                                                        }

                                                        if (s == $scope.subjecstDetails.length){
                                                                $ionicLoading.hide();
                                                                $scope.snumber = null;
                                                                $scope.password = null;
                                                                var alertPopup = $ionicPopup.alert({
                                                                                title: 'Congratulations',
                                                                                template: 'Account successfully activated.'
                                                                            });
                                                                            
                                                                            alertPopup.then(function(res) {
                                                                                $state.go('tab.login');
                                                                                
                                                                            }, function(error){
                                                                                    console.log(error);
                                                                            });
                                                        }else{
                                                            $ionicLoading.hide();
                                                            var alertPopup = $ionicPopup.alert({
                                                                                title: 'Alert!!!!',
                                                                                template: 'There was a problem loading your subjects.'
                                                                            });
                                                                            
                                                                            alertPopup.then(function(res) {
                                                                                $state.go('tab.login');
                                                                                
                                                                            }, function(error){
                                                                                    console.log(error);
                                                                            });
                                                        }
                                                
                                                                                                                    
                                                    }, function (err) {
                                                        $ionicLoading.hide(); 
                                                        console.error(err);
                                                    }); // end of getDetails Subjects
                                                    
                                                   
                                                
                                                                
                                                }, function(error){
                                                    $ionicLoading.hide();
                                                    var alertPopup = $ionicPopup.alert({
                                                                    title: 'Alert!!!!',
                                                                    template: 'Account activation failed, please contact Brainline @ 012 543 5000.'
                                                                });
                                                                
                                                                alertPopup.then(function(res) {
                                                                    $state.go('tab.account');
                                                                }, function(error){
                                                                        console.log(error);
                                                                });
                                                    console.log(error);
                                                });   

                                            }else{
                                                $ionicLoading.hide();
                                                var alertPopup = $ionicPopup.alert({
                                                                title: 'Alert!!!!',
                                                                template: 'Either username/password is wrong.'
                                                            });
                                                            
                                                            alertPopup.then(function(res) {
                                                                $state.go('tab.account');
                                                            }, function(error){
                                                                    
                                                                    console.log(error);
                                                            });
                                                            
                                                console.log("No connecttion to db....");
                                            }
                                            
                                            
                                        
                                        }else{
                                            $ionicLoading.hide();
                                            var alertPopup = $ionicPopup.alert({
                                                            title: 'Alert!!!!',
                                                            template: 'Adding account failed, Check that you entered the correct s-number/password.'
                                                        });
                                                        
                                                        alertPopup.then(function(res) {
                                                            $state.go('tab.account');
                                                        }, function(error){
                                                                
                                                                console.log(error);
                                                        });
                                                        
                                            console.log("No connecttion to db....");
                                        }

                                    }, function(error){
                                                                    
                                            console.log(error);
                                    });
                                } // end of 1st else
                            }, function(error){
                                                                
                                console.log(error);
                            });  // end of sql execute  

                                

                    } else {
                        console.log('You are not sure');
                    }
                });
                
            break;
         
        }; 
        
    }
         
})
.controller('DeleteUserCtrl', function($scope, $cordovaSQLite, $ionicPopup){
    $scope.deleteUser = function(snumber) {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Deleting User',
       template: 'Are you sure you want to delete the user?'
     });
     confirmPopup.then(function(res) {
       if(res) {
            var q ="DELETE FROM users where student_no = ?";
            $cordovaSQLite.execute(db, q, [snumber]).then(function(res){
                var q = "DELETE FROM subjects where student_no = ?";
                $cordovaSQLite.execute(db, q, [snumber]).then(function(res){
                    $scope.showAlert = function() {
                        var alertPopup = $ionicPopup.alert({
                        title: '',
                        template: 'User deleted successfully.'
                        });
                        alertPopup.then(function(res) {
                        console.log('');
                        });
                    };
                });
                
            });
       } else {
         console.log('You are not sure');
       }
     });
   };
    
})
.controller('FPassowrdCtrl', function($scope){  
    $scope.sendEmail = function(){
        if(window.plugins && window.plugins.emailComposer){
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
                console.log("Email Success");
            },
            "Brainapp Support",
            "",
            ["support@brainline.com"],
            null,
            null,
            false,
            null,
            null
            );
        }
    }
})
.controller('SubjCtrl', function($scope, $state, $stateParams, $cordovaSQLite, $ionicLoading, $ionicPopup, $cordovaDialogs, $ionicFilterBar){

    $scope.subjects = window.Values.sort(function(a){
        return a.name;
    });

    $scope.doRefresh = function(){
        $scope.subjects = window.Values;
        $scope.$broadcast('scroll.refreshComplete');
    }

    $scope.showFilterBar = function (){
        filterBar = $ionicFilterBar.show({
            items: $scope.subjects,
            update: function (filterItems) {
                $scope.subjects = filterItems
            }
            // filterProperties : 'name'
        });
    }

    var usermane = $stateParams.user;
    $scope.studentNumber = $stateParams.user;
    $scope.studentName = $stateParams.name;
    $scope.grade = $stateParams.grade;
    $scope.subjects = [];

    getSubjectsDetails(usermane);

    function getSubjectsDetails(usermane){
        console.log(usermane);
        var query = "SELECT name, description, icon FROM subjects where student_no = ?";
        $cordovaSQLite.execute(db, query, [usermane]).then(function(res) {
            if(res.rows.length > 0){
                for (var j = 0; j < res.rows.length; j++){
                    $scope.subjects.push({name: res.rows.item(j).name, desc: res.rows.item(j).description, icon: res.rows.item(j).icon})
                }
            console.log(JSON.stringify($scope.subjects, null, 4));
            }else{
                console.log('Could not load subjects.')
            }
        });
        
    };
  
})
.controller('AboutCtrl', function($scope){  
})
.controller('LegalCtrl', function($scope){ 
})
.controller('supportCtrl', function($scope, $ionicPlatform, $state, $ionicHistory, $cordovaAppVersion) {
    $scope.appVersion = "V "+appVersion;

    $scope.toIntro = function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        window.localStorage['didTutorial'] = "false";
        $state.go('intro');
    } 

    $scope.emailAddress = "support@brainline.com"
    $scope.phoneno = "+27125435000";
})