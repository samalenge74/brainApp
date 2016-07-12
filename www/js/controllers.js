

angular.module('brainApp.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the Dashboard
  $scope.startApp = function() {
    $state.go('tab.login');

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
.controller('MainCtrl', function($scope, $state,  $ionicHistory, $ionicSideMenuDelegate, $ionicPopup, $ionicModal) {
    
    $scope.$on('$ionicView.loaded', function(){
        ionic.Platform.ready(function(){
            if(navigator && navigator.splashscreen)
                navigator.splashscreen.hide();
        });
    });
    
    $scope.logout = function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $state.go('tab.login', {}, {reload: true});
    };
    
    $scope.subjects = function(){
        $state.go('eventmenu.subjects')
    }
  
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.showAlert = function() {
      $ionicPopup.alert({
        title: '',
        content: 'Coming Soon!!!'
      }).then(function(res) {
        console.log('Test Alert Box');
      });
    };

    $scope.navTitle='<img class="title-image" src="img/icon.png" />';
    
    
})
.controller('LoginCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, $ionicPopup, $cordovaDialogs, $ionicPlatform, $filter, $cordovaKeyboard, $rootScope) {
    
    if (window.cordova) {
        $cordovaKeyboard.disableScroll(true);
    }

    // Set the default value of inputType
    $scope.inputType = 'password';
    
    // Hide & show password function
    $scope.hideShowPassword = function(){
        if ($scope.inputType == 'password')
        $scope.inputType = 'text';
        else
        $scope.inputType = 'password';
    };

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

        $ionicLoading.show({
            animation: 'fade-in',
            showDelay: 0,
            noBackdrop: true,
            templateUrl: 'logging.html'
        });

        $scope.data = [];
        var uppercaseFilter = $filter('uppercase');
        var snum = uppercaseFilter(snumber);
        var stName = '';
        var gd = '';
        var pass = '';
        var result = '';
        var date_status_last_checked ='';
                
        $cordovaSQLite.execute(db, "SELECT student_no, name, password, grade, date_status_last_checked FROM users where student_no = ? and password = ?", [snum, password]).then(function(res){
            
            if(res.rows.length > 0){
               
                snum = res.rows.item(0).student_no;
                pass = res.rows.item(0).password;
                stName = res.rows.item(0).name;
                gd = res.rows.item(0).grade;
                date_status_last_checked = $filter('date')(new Date(res.rows.item(0).date_status_last_checked), 'dd-MM-yyyy');
                var now = $filter('date')(new Date(), 'dd-MM-yyyy');
                var daysDiff = diffDays(date_status_last_checked);
                
                $ionicLoading.hide();

                $rootScope.snum = snum;
                
                $state.go('eventmenu.subjects');

            } else {
                console.log(snumber+' '+password);
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: '',
                    template: 'Either the s-number/password is incorrect or this account does not exist.'
                });
                
                alertPopup.then(function(res) {
                    console.log('Either the s-number/password is incorrect or this account does not exist.');
                });
                
            } 
        });// end of execute
  
    }; 

})
.controller('AddUserCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, activateAccount, getSubjects, $ionicPopup, $cordovaDialogs, $filter, $cordovaFileTransfer, $cordovaKeyboard){

      // Set the default value of inputType
    $scope.inputType = 'password';
    
    // Hide & show password function
    $scope.hideShowPassword1 = function(){
        if ($scope.inputType == 'password')
        $scope.inputType = 'text';
        else
        $scope.inputType = 'password';
    };

    if (window.cordova) {
        $cordovaKeyboard.disableScroll(true);
    }
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

        var subjects_content_download_link = 'http://192.168.0.63/subjectcontents';
        var internet_conn = checkConnection();
        var uppercaseFilter = $filter('uppercase');
        var u = uppercaseFilter(username);
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
                    title: '',
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
                                    
                                        var alertPopup = $ionicPopup.alert({
                                            title: '',
                                            template: 'User Already Exist.'
                                        });
                                        
                                        alertPopup.then(function(res) {
                                            console.log('User already exists.');
                                        });
                                   
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
                                                            subj_name = subj_name.trim(); 
                                                            var subj_desc = $scope.subjecstDetails[i].subject_description; 
                                                            var subj_lastupdate_date = $scope.subjecstDetails[i].subject_lastupdate_date; 
                                                            var subj_added_date = $scope.subjecstDetails[i].subject_added_date; 
                                                            var subj_app_name = $scope.subjecstDetails[i].subject_old_dvd_name;
                                                            var subj_version = $scope.subjecstDetails[i].version;
                                                            var subj_filesize = $scope.subjecstDetails[i].filesize; 
                                                            var yr = new Date().getFullYear();
                                                            var downloadLink = subjects_content_download_link+"/"+yr+"/"+lang+"/"+gd+"/"+subj_name
                                                            var link_to_content = '/data/'+lang+"/"+gd+"/"+subj_app_name;

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
                                                        
                                                            var q = 'INSERT INTO subjects (subject_id, name, description, lastupdate_date, added_date, subject_app_name, version, filesize, icon, content_link, donwload_link, student_no) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
                                                            $cordovaSQLite.execute(db, q, [subj_id, subj_name, subj_desc, subj_lastupdate_date, subj_added_date, subj_app_name, subj_version, subj_filesize, icon, link_to_content, downloadLink, snum]).then(function(r){
                                                                console.log(pointer);

                                                            }, function(error){
                                                                $ionicLoading.hide(); 
                                                                console.log(error);
                                                            });
                                                            
                                                            s++;
                                                            console.log(downloadLink);
                                                            console.log(link_to_content);
                                                            
                                                        }

                                                        if (s == $scope.subjecstDetails.length){
                                                                $ionicLoading.hide();
                                                                $scope.snumber = null;
                                                                $scope.password = null;
                                                                var alertPopup = $ionicPopup.alert({
                                                                                title: '',
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
                                                                                title: '',
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
                                                                    title: '',
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
                                                                title: '',
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
                                                            title: '',
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
                    title: '',
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
                                    
                                    var alertPopup = $ionicPopup.alert({
                                        title: '',
                                        template: 'User Already Exist.'
                                    });
                                    
                                    alertPopup.then(function(res) {
                                        console.log('User already exists.');
                                    });
                                  
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
                                                            subj_name = subj_name.trim(); 
                                                            var subj_desc = $scope.subjecstDetails[i].subject_description; 
                                                            var subj_lastupdate_date = $scope.subjecstDetails[i].subject_lastupdate_date; 
                                                            var subj_added_date = $scope.subjecstDetails[i].subject_added_date; 
                                                            var subj_app_name = $scope.subjecstDetails[i].subject_old_dvd_name;
                                                            var subj_version = $scope.subjecstDetails[i].version;
                                                            var subj_filesize = $scope.subjecstDetails[i].filesize; 
                                                            var yr = new Date().getFullYear();
                                                            var downloadLink = subjects_content_download_link+yr+"/"+lang+"/"+gd+"/"+subj_name
                                                            var link_to_content = '/data/'+lang+"/"+gd+"/"+subj_app_name;
                                                            var pointer = subjects_content_download_link+link_to_content;
                                                            var url = '';
                                                            var filename = 'data.zip';
                                                            var targetPath = '';
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
                                                        
                                                            var q = 'INSERT INTO subjects (subject_id, name, description, lastupdate_date, added_date, subject_app_name, version, filesize, icon, content_link, donwload_link, student_no) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
                                                            $cordovaSQLite.execute(db, q, [subj_id, subj_name, subj_desc, subj_lastupdate_date, subj_added_date, subj_app_name, subj_version, subj_filesize, icon, link_to_content, downloadLink, snum]).then(function(r){
                                                                console.log(pointer);
                                                              
                                                                
                                                            }, function(error){
                                                                $ionicLoading.hide(); 
                                                                console.log(error);
                                                            });
                                                            console.log(downloadLink);
                                                            console.log(link_to_content);
                                                            s++;
                                                            
                                                        }

                                                        if (s == $scope.subjecstDetails.length){
                                                                $ionicLoading.hide();
                                                                $scope.snumber = null;
                                                                $scope.password = null;
                                                                var alertPopup = $ionicPopup.alert({
                                                                                title: '',
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
                                                                                title: '',
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
                                                                    title: '',
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
                                                                title: '',
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
                                                            title: '',
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
.controller('DeleteUserCtrl', function($scope, $cordovaSQLite, $ionicPopup, $cordovaKeyboard){
    
    if (window.cordova) {
        $cordovaKeyboard.disableScroll(true);
    }
    
    $scope.deleteUser = function(snumber) {
     var confirmPopup = $ionicPopup.confirm({
       title: '',
       template: 'Are you sure you want to delete the user?'
     });
     confirmPopup.then(function(res) {
       if(res) {
            var q ="DELETE FROM users where student_no = ?";
            $cordovaSQLite.execute(db, q, [snumber]).then(function(res){
                var q = "DELETE FROM subjects where student_no = ?";
                $cordovaSQLite.execute(db, q, [snumber]).then(function(res){
                    
                        var alertPopup = $ionicPopup.alert({
                        title: '',
                        template: 'User deleted successfully.'
                        });
                        alertPopup.then(function(res) {
                        	$state.go('tab.login');
                        });
                    
                });
                
            });
       } else {
         console.log('You are not sure');
       }
     });
   };
    
})
.controller('FPassowrdCtrl', function($scope, $cordovaKeyboard){ 

    if (window.cordova) {
        $cordovaKeyboard.disableScroll(true);
    }

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
.controller('SubjCtrl', function($scope, $rootScope, $state, $stateParams, $cordovaSQLite, $ionicLoading, $ionicPopup, $cordovaDialogs, $ionicFilterBar, $timeout, $cordovaFileTransfer){

    var username = $rootScope.snum;
    var grade = '';

    $scope.subjects = [];

    getSubjectsDetails(username);

    function getSubjectsDetails(username){
        
        $ionicLoading.show({
            animation: 'fade-in',
            showDelay: 0,
            noBackdrop: true,
            templateUrl: 'subjects.html'
        });

        var query = "SELECT name, subject_app_name, icon, content_link, download_link FROM subjects where student_no = ? ORDER BY name";
        $cordovaSQLite.execute(db, query, [username]).then(function(res) {
            if(res.rows.length > 0){
                for (var j = 0; j < res.rows.length; j++){
                    grade = res.rows.item(j).subject_app_name;
                    grade = grade.substr(0, 7);
                    $scope.subjects.push({name: res.rows.item(j).name, grade: grade, icon: res.rows.item(j).icon, link: res.rows.item(j).content_link,  download_link: res.rows.item(j).download_link});

                }
                console.log(JSON.stringify($scope.subjects, null, 4));
                $ionicLoading.hide();
            
            }else{
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: '',
                    template: 'Error loading subjects.'
                });
                
                alertPopup.then(function(res) {
                    //$state.go('tab.login');
                    
                }, function(error){
                        console.log(error);
                });
                
            }
        });
        
    };

    function writeFile(fileEntry, dataObj, isAppend) {

        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {

            fileWriter.onwriteend = function() {
                console.log("Successful file write...");
                
            };

            fileWriter.onerror = function(e) {
                console.log("Failed file write: " + e.toString());
            };

            fileWriter.write(dataObj);
        });
    }

    function saveFile(dirEntry, fileData, fileName) {

        dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

            writeFile(fileEntry, fileData);

        }, onErrorCreateFile);
    }

    function onErrorCreateFile(error){
        console.log(error);
    }

    function getFSFail(evt) {
        console.log(evt.target.error.code);
    }

    function onError(e) {
        console.log('Error', e);
    }

    function transferComplete(evt) {
        
        var alertPopup = $ionicPopup.alert({
            title: '',
            template: 'The transfer is complete.'
        });
        
        alertPopup.then(function(res) {
            console.log('The transfer is complete.');
        });
    }

    function transferFailed(evt) {
        
        var alertPopup = $ionicPopup.alert({
            title: '',
            template: 'An error occurred while transferring the file.'
        });
        
        alertPopup.then(function(res) {
            console.log('An error occurred while transferring the file.');
        });
    }

    function transferCanceled(evt) {
        
        var alertPopup = $ionicPopup.alert({
            title: '',
            template: 'The transfer has been canceled by the user.'
        });
        
        alertPopup.then(function(res) {
            console.log('The transfer has been canceled by the user.');
        });
        
    }
  
    function getZipFile(dirEntry, targetPath, downloadLink){

        
        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener("load", transferComplete);
        xhr.addEventListener("error", transferFailed);
        xhr.addEventListener("abort", transferCanceled);

        xhr.open('POST', 'http://www.mybrainline.com/eve/dvd/generate/df.php', true);
        xhr.setRequestHeader('Content-type','application/zip');
        xhr.responseType = 'arraybuffer'; 

        xhr.onprogress = function(e) {
            if (e.lengthComputable) {
                progressBar.max = e.total;
                progressBar.value = e.loaded;
            }
        };

        xhr.onloadstart = function(e) {
            progressBar.value = 0;
        };
        
        xhr.onloadend = function(e) {
            progressBar.value = e.loaded;
        };

        

        xhr.onload = function(){
                
            if (this.status == 200) {
                var filename = "";
                
                var disposition = xhr.getResponseHeader('Content-Disposition');

                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                }

                var type = xhr.getResponseHeader('Content-Type');

                var blob = new Blob([this.response], { type: type });

                saveFile(dirEntry, blob, targetPath);

                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                    window.navigator.msSaveBlob(blob, filename);
                } else {

                    var URL = window.URL || window.webkitURL;
                    var downloadUrl = URL.createObjectURL(blob);
                    
                    if (filename) {
                        // use HTML5 a[download] attribute to specify filename
                        var a = document.createElement("a");
                        // safari doesn't support this yet
                        if (typeof a.download === 'undefined') {
                            window.location = downloadUrl;
                        } else {
                            a.href = downloadUrl;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                        }
                    } else {
                        window.location = downloadUrl;
                    }

                    setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                }
            }           

        };
        xhr.send('moms=KLJKjlH988989h89Hp98hpjhgFG786GF6gKJBB7878GLGjbLJ&pointer='+downloadLink);
    }
   
    $scope.viewContent = function(subject){
        var targetPath = subject.link+"/data.zip"; // save location
        var downloadLink = subject.download_link+"/data.zip"; // file to download
        var subj_name = subject.name;

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
            fileSystem.root.getFile(targetPath, { create: false }, 

            function fileExists(){
                var params = { subjName: subj_name, dir: targetPath}
                $state.go('eventmenu.contents', params);
            }, 
            
            function fileDoesNotExist(){
                var confirmPopup = $ionicPopup.confirm({
                    title: '',
                    template: 'Subject content not available yet, do you want to download the content now?'
                });

                confirmPopup.then(function(res){
                    if (res){
                        getZipFile(fileSystem.root, targetPath, downloadLink);
                    }else{
                            console.log("not now!");
                    }
                }, function(error){
                    console.error(error);
                });
            });
        }, getFSFail); //of requestFileSystem
    }   
  
})
.controller('AboutCtrl', function($scope){  
})
.controller('LegalCtrl', function($scope){ 
})
.controller('supportCtrl', function($scope, $ionicPlatform, $state, $ionicHistory, $cordovaAppVersion, $cordovaFileTransfer, $cordovaKeyboard) {
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
.controller('ContentsCtrl', function($scope, $state, $stateParams){

    $scope.subjName = $stateParams.subjName;
    console.log($scope.subjName);
    
    var dir = $stateParams.dir;
    console.log(dir);

    

    $scope.goBack = function() {
        $state.go('eventmenu.subjects');
    };

})