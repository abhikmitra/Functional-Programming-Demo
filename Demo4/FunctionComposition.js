/**
 * Created by abmitra on 2/7/2015.
 */
var _ = require("lodash");
var fn =  _.compose(
    function(arr){return _.max(arr)},
    function(arr){return _.filter(arr,function(el){return el%3==0})},
    function(){return _.range(10)});

console.log(fn());
