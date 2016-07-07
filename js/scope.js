//apply function
var Quo = function (string){
    this.status = string;
}
Quo.prototype.get_status = function(){
    return this.status;
}
Quo("brrr");

var myQuo = new Quo ("confused");

console.log(myQuo.get_status());

var statusObj = {
    status: "ok!"
}

var st = Quo.prototype.get_status.apply(statusObj);
console.log(st);

//***********

//arguments

var sum = function(){
    var i, sum = 0;
    
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log("args sum " + sum(1,5,6,8,7,9,10));

//testing exceptions

var add = function (a,b){
    if (arguments.length < 2){
        throw{
            name: "notEnough",
            message: "another argument is needed"
        };
    }
    if (typeof a!== 'number' || typeof b!=='number'){
        throw{
            name: "TypeError",
            message: "this needs to be a number"
        };
    }
    
    return a+b;
}

var tryIt = function(){
    try{
        add(3)
    }catch(e){
        console.log(e.name + ": " + e.message);
    }
    
    try{
        add("asdfasdf", "asdf")
    }catch(e){
        console.log(e.name + ": " + e.message);
    }
    
    try{
        add(3, 6)
    }catch(e){
        console.log(e.name + ": " + e.message);
    }
}
tryIt();