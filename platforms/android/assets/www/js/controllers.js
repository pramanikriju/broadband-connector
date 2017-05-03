angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$http' ,'$cordovaInAppBrowser','$rootScope','$state',

function ($scope,$http,$cordovaInAppBrowser,$rootScope,$state) {
      $scope.network = {
       'username'  : '',
       'password'  : '',
       'isp'       : '1',
       'save'      : false,
       'background': false
     };
      var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };
   
//state-name menu.home
     $scope.submit = function() {
      var str1 = $scope.network.username;
      var str2 = $scope.network.password;
      var url1= "http://1.1.1.1/login1.html?a=%3F"+ str1 + "%2B%2F%40&b=%3F"+ str2+ "%2B%2F%40";
      console.log(url1);
      


//connection logic
       if($scope.network.isp==1){
           

            var options = {
                hidden:'yes',
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no',
                
            };
      $cordovaInAppBrowser.open(url1, '_blank', options)
      .then(function(event) {
        // success
        console.log("success");
      })
      .catch(function(event) {
        // error
        console.log("fail");
      });
      
      
      $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
				console.log('loadstop');
                $cordovaInAppBrowser.close();
			});

          
  
       
       }
       
       else {
           var url2 = "https://10.254.254.8/0/up/";
           var alliance = "login=1&user="+ str1 + '&pass=' + str2;
           console.log(alliance);
           
           $http({
            method: 'POST',
            url: url2,
            data: alliance,
            });
     }
//background process

       if($scope.network.save==true){
           
       }  // backgrounf if check

     
    
} //submit fuction


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('connectionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('donateCtrl', ['$scope', '$stateParams','$cordovaInAppBrowser','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaInAppBrowser,$state) {
  

   var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };
   

   $scope.openBrowser = function() {
       $scope.currState = $state;
   var currentState = $state.current.name; 
   console.log(currentState);
      $cordovaInAppBrowser.open('https://www.payumoney.com/paybypayumoney/#/88C22ED3FFE5FFCA0444859F06FEA10E', '_blank', options)
		
      .then(function(event) {
         // success
      })
		
      .catch(function(event) {
         // error
      });
   }
  



}])
 