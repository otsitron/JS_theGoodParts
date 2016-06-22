//global objects

var MYAPP = {};
MYAPP.stooge = {
    "first-name": "Olga",
    "last-name": "Tsitron"
};
MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time:"2016-09-22 14:55",
        city: "Sydney"
    },
    arrival:{
        IATA: "LAX",
        time: "2016-09-23 10:42",
        city: "Los Angeles"
    }
};

if(typeof Object.create !== 'function'){
    Object.create = function(o) {
        var F = function(){};
        F.prototype = o;
        return new F();
    }
}

var new_stooge = Object.create(MYAPP.stooge);
new_stooge["first-name"] = "Ilya";

//console.log(MYAPP.stooge);
//console.log(MYAPP.flight);

console.log(new_stooge);

//console.log (typeof new_stooge['first-name']);
//console.log (typeof new_stooge.toString);

//console.log(Object.prototype)
