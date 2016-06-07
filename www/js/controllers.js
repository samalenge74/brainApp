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
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS users(student_no TEXT PRIMARY KEY, student_email TEXT, gender TEXT, student_paid INTEGER, OLD_student_status INTEGER, password TEXT, academic_year TEXT, name TEXT, grade INTEGER, status INTEGER, brainonline_sync_status INTEGER, year_from TEXT, year_to TEXT, date_status_last_checked TEXT)");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS subjects (subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, student_no TEXT)");
            $location.path("/tab/login");
            
        }else{
            db = openDatabase("websql.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql("DROP TABLE IF EXISTS users");
                tx.executeSql("CREATE TABLE IF NOT EXISTS users (student_no TEXT PRIMARY KEY, name TEXT, grade TEXT, password TEXT, student_email TEXT, academic_year TEXT,  year_from TEXT, year_to TEXT, gender TEXT, status INTEGER, OLD_student_status INTEGER, student_paid INTEGER, brainonline_sync_status INTEGER)");
                tx.executeSql("CREATE TABLE IF NOT EXISTS subjects ((subject_id INTEGER PRIMARY KEY, name TEXT, description TEXT, lastupdate_date TEXT, added_date TEXT, subject_app_name TEXT, student_no TEXT");
            });
            $location.path("/tab/login");
            
        }
    })
})
.controller('MainCtrl', function($scope, $state,  $ionicHistory, $ionicSideMenuDelegate, $ionicPopup) {
    
    
    
     $scope.logout = function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $state.go('tab.dash');
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
    
    
})
.controller('LoginCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, $ionicPopup, $cordovaDialogs, $ionicPlatform) {

      $scope.Login = function(snumber, password) {
        $scope.data = {};
      
        var query = "SELECT student_no, name, grade, date_status_last_checked FROM users WHERE student_no = ? AND password = ?";
        $cordovaSQLite.execute(db, query, [snumber, password]).then(function(res){
            if(res.rows.length > 0){

                var snum = res.rows.item(0).student_no;
                var stName = res.rows.item(0).name;
                var gd = res.rows.item(0).grade;
                var result = { user: snum, name: stName, grade: gd};
                var date_status_last_checked = moment(res.rows.item(0).date_status_last_checked);
                var now = moment(new Date());
                
                var daysDiff = now.diff(date_status_last_checked, 'days');
                
                console.log(date_status_last_checked);
                console.log(now);
                console.log(daysDiff);
                
                $ionicLoading.hide();
                
                $state.go('eventmenu.subjects', result);
                
            } else {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    template: 'Either the s-number/password is incorrect',
                });
               
            } 
        });// end of execute
  
    }; 

})
.controller('AddUserCtrl', function($scope, $state, $cordovaSQLite, $ionicLoading, activateAccount, $ionicPopup, $cordovaDialogs){
    
    $scope.userDetails = [];
    $scope.subjecstDetails = [];
    $scope.status;
    $scope.user;
    
   
    var status_date = this;
    status_date.timeOne = new Date();
    
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

    $scope.add = function(username, password){
        
        var internet_conn = checkConnection();
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
                    
                            var query = "SELECT student_no FROM users WHERE student_no = ? AND password = ?";
                            $cordovaSQLite.execute(db, query, [username, password]).then(function(res){
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
                                    
                                   
                                    activateAccount.getDetails(username).then(function(user){
                                        
                                        $scope.userDetails = user.data;
                                        
                                        if($scope.userDetails.length > 0){
                                            
                                            // user details
                                            
                                            snum = $scope.userDetails[0].student_no;
                                            stName = $scope.userDetails[0].name;
                                            gd = $scope.userDetails[0].grade;
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
                                            
                                            // Insert into user new user details
                                      
                                            var query = 'INSERT INTO users (student_no, name, grade, password, student_email, academic_year,  year_from, year_to, gender, status, OLD_student_status, student_paid, brainonline_sync_status, date_status_last_checked) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                                            $cordovaSQLite.execute(db, query, [snum, stName, gd, pass, email, ac_year, ac_year_from, ac_year_to, gender, status, old_status, paid, sync_status, status_date]).then(function(res){
                                                
                                                $ionicLoading.hide();
                                                var alertPopup = $ionicPopup.alert({
                                                                title: 'Alert!!!!',
                                                                template: 'Account successfully activated.'
                                                            });
                                                            
                                                            alertPopup.then(function(res) {
                                                                $state.go('tab.login');
                                                                
                                                            }, function(error){
                                                                    console.log(error);
                                                            });
                                               
                                                            
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
                                                            template: 'Connection to Server Failed, please contact Brainline @ 012 543 5000.'
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
                    
                            var query = "SELECT student_no FROM users WHERE student_no = ? AND password = ?";
                            $cordovaSQLite.execute(db, query, [username, password]).then(function(res){
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
                                    
                                     activateAccount.getDetails(username).then(function(user){
                                        
                                        $scope.userDetails = user.data;
                                        
                                        if($scope.userDetails.length > 0){
                                            
                                            // user details
                                            
                                            snum = $scope.userDetails[0].student_no;
                                            stName = $scope.userDetails[0].name;
                                            gd = $scope.userDetails[0].grade;
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
                                            
                                            // Insert into user new user details
                                      
                                            var query = 'INSERT INTO users (student_no, name, grade, password, student_email, academic_year,  year_from, year_to, gender, status, OLD_student_status, student_paid, brainonline_sync_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                                            $cordovaSQLite.execute(db, query, [snum, stName, gd, pass, email, ac_year, ac_year_from, ac_year_to, gender, status, old_status, paid, sync_status]).then(function(res){
                                                
                                                $ionicLoading.hide();
                                                console.log(JSON.stringify($scope.userDetails, null, 4));   
                                                console.log(snum);
                                                var alertPopup = $ionicPopup.alert({
                                                                title: 'Alert!!!!',
                                                                template: 'Account successfully activated.'
                                                            });
                                                            
                                                            alertPopup.then(function(res) {
                                                               $state.go('tab.login');
                                                            }, function(error){
                                                                    console.log(error);
                                                            });
                                               
                                                            
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
                                                            template: 'Connection to Server Failed, please contact Brainline @ 012 543 5000.'
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
.controller('DeleteUserCtrl', function($scope){  
})
.controller('FPassowrdCtrl', function($scope){  
    $scope.sendEmail = function(){
        if(window.plugins && window.plugins.emailComposer){
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
                console.log("Email Success");
            },
            "Brainapp Support",
            "",
            "support@brainline.com",
            null,
            null,
            false,
            null,
            null
            );
        }
    }
})
.controller('SubjCtrl', function($scope, $state, $stateParams, $cordovaSQLite, $ionicLoading, getSubjects, $ionicPopup, $cordovaDialogs){
  
    getSubjectsDetails();
    
    var usermane = $scope.studentName =$stateParams.snum;
    $scope.studentName = $stateParams.name;
    $scope.grade = $stateParams.grade;
    
     var subj_id = ''; var subj_name = ''; var subj_desc = ''; var subj_lastupdate_date = ''; var subj_added_date = ''; var subj_app_name = ''; 
     
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

    function getSubjectsDetails(username){
        var query = "SELECT id, name, description FROM subjects WHERE studentID = ?";
        $cordovaSQLite.execute(db, query, [username]).then(function(res) {
            if(res.rows.length > 0){
                $scope.subjects = res.rows;
            }else{
                var confirmPopup = $ionicPopup.confirm({
                    title: 'No Subjects Found!!!',
                    template: 'Do you want to add Subjects now?'
                });

                 confirmPopup.then(function(res) {
                    if(res) { // if yes
                        console.log("No subjects found");
                        $ionicLoading.show({
                            animation: 'fade-in',
                            showDelay: 0,
                            noBackdrop: true,
                            templateUrl: 'subjects.html'
                        });
                        
                        getSubjects.getDetails(usermane).then(function(det){
                            $scope.subjecstDetails = det.data;
                            
                            var s = 0;
                            
                            for (var i = 0; i < $scope.subjecstDetails.length; i++){
                                
                                subj_id = $scope.subjecstDetails[i].subject_id; 
                                subj_name = $scope.subjecstDetails[i].subject_name; 
                                subj_desc = $scope.subjecstDetails[i].subject_description; 
                                subj_lastupdate_date = $scope.subjecstDetails[i].subject_lastupdate_date; 
                                subj_added_date = $scope.subjecstDetails[i].subject_added_date; 
                                subj_app_name = $scope.subjecstDetails[i].subject_old_dvd_name; 
                            
                                var q = 'INSERT INTO subjects (subject_id, name, description, lastupdate_date, added_date, subject_app_name, student_no) VALUES (?,?,?,?,?,?,?)';
                                $cordovaSQLite.execute(db, q, [subj_id, subj_name, subj_desc, subj_lastupdate_date, subj_added_date, subj_app_name, snum]).then(function(r){
                                    console.log(JSON.stringify($scope.subjecstDetails, null, 4));   
                                
                                }, function(error){
                                    $ionicLoading.hide(); 
                                    console.log(error);
                                });
                                
                                s++;
                                
                            }
                            
                            if (s == $scope.subjecstDetails.length){
                                $ionicLoading.hide();
                                $state.go($state.$current, null, { reload: true });
                            }else{
                                console.log('Loading Subjects failed!!!!');
                            }
                                                                                        
                        }, function (err) {
                            $ionicLoading.hide(); 
                            console.error(err);
                        }); // end of getDetails Subjects
                
                    }else{
                        $ionicHistory.clearCache();
                        $ionicHistory.clearHistory();
                        $state.go('tab.login');
                    }
           
                }, function (err) {
                    console.error(err);
                });
            }
        });
        
    };
  
})
.controller('AboutCtrl', function($scope){  
})
.controller('LegalCtrl', function($scope){ 
})
.controller('supportCtrl', function($scope, $state, $ionicHistory) {
    $scope.sendEmail = function(){
        if(window.plugins && window.plugins.emailComposer){
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
                console.log("Email Success");
            },
            "BrainApp Support",
            "",
            "support@brainline.com",
            null,
            null,
            false,
            null,
            null
            );
        }
    }
  
    $scope.toIntro = function(){
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        window.localStorage['didTutorial'] = "false";
        $state.go('intro');
    }  
    
    $scope.phoneno = "+27125435000";
})