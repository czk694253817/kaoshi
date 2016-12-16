'use strict';

/**
 * @ngdoc function
 * @name bugcenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bugcenterApp
 */
angular.module('jgr',[]).directive("autoplay",[function(){
    return {
      restrict:"ECMA",
      template:'<div> <div class="asd"> <p>{{data4}}</p> <div ng-repeat="x in data"> {{x.title | f}}</div> <div ng-repeat="x in data3"><img src="{{x.img}}"></div> </div> </div>',
      scope:{data:"=jgr",data2:"@jgr2",data3:"=img",data4:"@p"},
      replace:true,
      link:function(s,e,a){

      }

    }
  }]).filter("f",[function(){
    return function(e){
      if(e.length>=5){
        return e.substr(0,5)+'...'
      }else{
        return e
      }
        
    }
  }]);
