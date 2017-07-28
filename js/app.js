import '../css/app.scss';
import $ from "jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';


var object1 = {
a: 3,
doThis1: function() {
    console.log( this.a );
    document.querySelector("#this1 .container").innerHTML += "<br/>" + this.a;
}
};
object1.doThis1(); // 2

// array is an object!

var myArray = [ "foo", 42, "bar" ];
myArray.baz = "baz";
myArray.length; // 3
myArray.baz; // "baz"
console.log(myArray);

// object defineProperty

var myObject = {
    b: 10,
    c: 20
};
Object.defineProperty( myObject, "a", {
value: 2,
writable: true,
configurable: true,
enumerable: true
} );

// creating a constant

Object.defineProperty( myObject, "constant", {
value: 10000,
writable: false,
configurable: false
} );

console.log(myObject); // 2

// class - prototype

function Car(name) {
    this.name = name;
}

Car.prototype.getName = function() {
    return this.name;
}

var audi = new Car('Audi');
var nissan = new Car('Nissan');

document.querySelector("#prototype1 .container").innerHTML += "<br/>" + audi.getName();
document.querySelector("#prototype1 .container").innerHTML += "<br/>" + nissan.getName();

$(function() {
    $('[id^=scrollTo]').click(function() {
        var id = $(this).attr('id').slice(9);
        $(window).scrollTo($('#' + id), 1000, { offset: { top: -51, left: 0 } });
    });

    $('#marketing').waypoint(function() {
        $('.img-circle').addClass('animated zoomIn');
    }, {
        offset: '50%',
        triggerOnce: true
    });

    $('.featurette').waypoint(function() {
        $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
    }, {
        offset: '50%',
        triggerOnce: true
    });
});
