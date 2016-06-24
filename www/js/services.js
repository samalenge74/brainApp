var remoteLink = "http://192.168.0.63/brainApp/";
//var remoteLink = "http://mybrainline.com/eve/brainApp/"
var remoteLinkContent = "http://192.168.0.63/subjContent/df.php";
angular.module('brainApp.services', [])

.factory("activateAccount", ['$http', function($http) {
        var user = [];
        
        return {
            getDetails: function(snumber){
                return $http.get(remoteLink+"activation?id=" + snumber).then(function(response){
                    user = response;
                    return user;
                });
            }
        }
         
}])

.factory("getSubjects", ['$http', function($http) {
        var subjectDetails = [];
        
        return {
            getDetails: function(snumber){
                return $http.get(remoteLink+"getSubjects?id=" + snumber).then(function(response){
                    subjectDetails = response;
                    return subjectDetails;
                });
            }
        }
         
}])

.factory("getSubjectsContents", ['$http', function($http){
    var zip_file = '';

    return{
        getZipFile: function (moms, pointer) {
            return $http.post(remoteLinkContent, {moms: moms, pointer: pointer}).then(function(response) {
                zip_file = response;
                return zip_file;
            })
        }
    }
}])
