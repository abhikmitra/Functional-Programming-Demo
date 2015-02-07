/**
 * Created by abmitra on 2/6/2015.
 */
/*Find the least element*/
var _ = require("lodash");
var a = [1,2,3,4,5,0];
console.log(_.reduce(a,comparator));
function comparator(min, cur){
    if (cur < min) return cur;
    else return min;
};