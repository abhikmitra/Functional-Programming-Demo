/**
 * Created by abmitra on 2/7/2015.
 */
var _ = require("lodash");
var utils = {};
utils.validateMixin = {
    addValidator: function(fun) {
        this._validators = this._validators || [];
        this._validators.push(fun);
    },
    init: function(val) {
        this.validate(val);
    },
    validate: function(val) {

        return _.every(this._validators,function(validator){validator(val)});
    }
};


(function(utils){
    function Line(){

    }
    Line.prototype = (function(){
        function addLine(){

        }
        var exposed = {
            addLine:addLine
        }
        return _.extend(exposed,utils.validateMixin)
    })();
    var line = new Line();
    line.addValidator(function(){console.log("Validated")});
    line.init();
})(utils);


