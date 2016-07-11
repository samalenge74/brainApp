var remoteLink = "http://mybrainline.com/eve/brainApp/"

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
         
}]);
