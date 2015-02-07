/**
 * Created by abmitra on 2/6/2015.
 */
var _ = require("lodash");


/*
* Problem Statement
* A System to translate text  from one language to another using a library called translator.Imagine that the
* translator has a function called translate which takes the language as a first parameter and the string as a second parameter
* */














function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        return fn.apply(this,args.concat(Array.prototype.slice.call(arguments,0)));
    }
}

function AppLoader(translator, uiController){
    this.translator = translator;
    this.uiController = new uiController(curry(_.bind(translator.translate,translator),"English"));
}

function uiController(translatorFn){
    this.translatorFn = translatorFn;
}
uiController.prototype.translateText = function(text){
    return this.translatorFn(text);
};
uiController.prototype.translateTextHardcoded = function(text){
    return this.translatorFn("Hello!!");
};









var translator = {
    AppId:"111",
    translate : function(language,str){
        if(this.AppId){
            return "The translated text is blah blah blah" + str + " in "+ language;
        }

    }
};

var Loader = new  AppLoader(translator,uiController);


console.log(Loader.uiController.translateText("Random Text"));
console.log(Loader.uiController.translateTextHardcoded());