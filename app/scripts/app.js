
/**
 * @ngdoc overview
 * @name bugcenterApp
 * @description
 * # bugcenterApp
 *
 * Main module of the application.
 */
angular
  .module('bugcenterApp', ['ui.router','jgr']).config(['$stateProvider',function($stateProvider){
    $stateProvider.state("jgr",{
      templateUrl:'views/jgr.html',
      url:"/jgr",
      controller:"jgr"
    }).state("lk",{
      templateUrl:'views/lk.html',
      url:"/lk",
      controller:"lk"
    })
  }]).controller("jgr",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news1/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(){

   }),
   $http({
     url:"http://47.90.20.200:1602/news-img1/",
     method:"get"
   }).then(function(e){
     $scope.data3=e.data
   },function(){

   })
  }]).controller("jgr2",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news2/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(){

   }),
   $http({
     url:"http://47.90.20.200:1602/news-img2/",
     method:"get"
   }).then(function(e){
     $scope.data3=e.data
   },function(){

   })
  }])

