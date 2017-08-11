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

function Truck(name,capacity) {
Car.call( this, name );
this.capacity = capacity;
}

Truck.prototype = Object.create( Car.prototype );
// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Truck.prototype.getCapacity = function() {
return this.capacity;
};
var scania = new Truck( "Scania", 50000 );

document.querySelector("#prototype1 .container").innerHTML += "<br/>" + audi.getName();
document.querySelector("#prototype1 .container").innerHTML += "<br/>" + nissan.getName();
document.querySelector("#prototype1 .container").innerHTML += "<br/>" + scania.getName() + scania.getCapacity();

// object delegation
var Task = {
    setID: function(ID) { 
        this.id = ID; 
    },
    outputID: function() { 
        document.querySelector("#delegate1 .container").innerHTML += "<br/>" + "id: " + this.id;
    }
};
// make `XYZ` delegate to `Task`
var XYZ = Object.create( Task );
XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
};
XYZ.outputTaskDetails = function() {
    this.outputID();
    document.querySelector("#delegate1 .container").innerHTML += "<br/>" + "label: " + this.label;
};

XYZ.prepareTask(123,'label')
XYZ.outputTaskDetails();

// object delegation 2

var Person = function(name) {
    this.name = name;
}

Person.prototype.identify = function() {
    return "I am " + this.name;
}

function Man(name) {
    Person.call(this, name);
}
Man.prototype = Object.create(Person.prototype);

Man.prototype.speak = function() {
    document.querySelector("#delegate2 .container").innerHTML += "<br/>" + "Hello " + this.identify() + "!";
}

var Mark = new Man("Mark");
var John = new Man("John");

Mark.speak();
John.speak();

// object delegation 2 - another method

var Person2 = {
    init: function(name) {
        this.name = name;
    },
    identify: function() {
        return "I am " + this.name;
    }
}

var Man2 = Object.create(Person2);

Man2.speak = function() {
    document.querySelector("#delegate2 .container").innerHTML += "<br/>" + "Hello " + this.identify() + "!";
}

var Jason = Object.create(Man2);
var James = Object.create(Man2);

Jason.init("Jason");
James.init("James");

Jason.speak();
James.speak();

// ---

// Parent class
function Widget(width,height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
}

Widget.prototype.render = function(element){
    if (this.$elem) {
        this.$elem.css( {
            width: this.width + "px",
            height: this.height + "px"
        } ).appendTo( element );
    }
};
// Child class
function Button(width,height,label) {
    // "super" constructor call
    Widget.call( this, width, height );
    this.label = label || "Default";
    this.$elem = $( "<button class='btn btn-default'>" ).text( this.label );
}
// make `Button` "inherit" from `Widget`
Button.prototype = Object.create( Widget.prototype );

// override base "inherited" `render(..)`
Button.prototype.render = function(element) {
    // "super" call
    Widget.prototype.render.call( this, element );
    this.$elem.click( this.onClick.bind( this ) );
};
Button.prototype.onClick = function(evt) {
    console.log( "Button '" + this.label + "' clicked!" );
};

function Box(width,height,color,border) {
    Widget.call( this, width, height );
    this.color = color || "white";
    this.border = border || "1px solid black";
    this.$elem = $( "<div>" );
}
Box.prototype = Object.create( Widget.prototype );

Box.prototype.render = function(element) {
    Widget.prototype.render.call( this, element );

    if (this.$elem) {
        this.$elem.css( {
            background: this.color,
            border: this.border
        } ).appendTo( element );
    }
};

var buttons1 = document.querySelector("#buttons1 .container");

// same different way

class Widget2 {
    constructor(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }
    render(element){
        if (this.$elem) {
            this.$elem.css( {
                width: this.width + "px",
                height: this.height + "px"
            } ).appendTo( element );
        }   
    }
}

class Button2 extends Widget2 {
    constructor(width,height,label) {
        super( width, height );
        this.label = label || "Default";
        this.$elem = $( "<button class='btn btn-default'>" ).text( this.label );
    }
    render(element) {
        super.render(element);
        this.$elem.click( this.onClick.bind( this ) );
    }
    onClick(evt) {
        console.log( "Button '" + this.label + "' clicked!" );
    }
}

var buttons2 = document.querySelector("#buttons2 .container");

class Date1 {
    constructor(dd,mm,rrrr) {

        if (dd == null) {
            var today = new Date ();
            this.dd = today.getDate();
            this.mm = today.getMonth() + 1;
            this.rrrr = today.getFullYear();    
        } else {
            this.dd = dd;
            this.mm = mm;
            this.rrrr = rrrr;   
        }

        this.addZero();

    }
    addZero() {
        if (this.dd < 10) {
            this.dd = "0" + this.dd;
        }

        if (this.mm < 10) {
            this.mm = "0" + this.mm;
        }
    }
    checkSunday() {

        var today = new Date ();
        var thisYear = today.getFullYear();  
        console.log("Starting from " + this.rrrr);  

        for (var year = this.rrrr; year <= thisYear; year++)
        {
            var d = new Date(year, 0, 1);
            if ( d.getDay() === 1 )
                console.log("1st January is being a Monday  "+year);
        }
    }
    render(element) {
        element.innerHTML += "<br/>" + this.dd + "/" + this.mm + "/" + this.rrrr;
    }
}

var dat1 = new Date1( );
var dat2 = new Date1( 1,1,1980);
var date1 = document.querySelector("#date1 .container");
dat1.render(date1);
dat2.render(date1);
dat1.checkSunday()
dat2.checkSunday()

class Number1 {
    constructor(num) {
        this.num = num;
    }
    render(element) {
        element.innerHTML += "<br/>" + this.num;
    }
}

var num1 = new Number1( 19 );
var numb1 = document.querySelector("#number1 .container");
num1.render(numb1);


// ajax 1

function useAjax(url) {

    var query;
    query = new XMLHttpRequest();
    query.onreadystatechange = function() {
        if(query.readyState === 4 && query.status === 200) {

            var arr = JSON.parse(this.responseText);
            var output = "";

            for(var i = 0; i < arr.length; i++) {
                output += arr[i].name + '<br>';
            }
            document.querySelector("#ajax1 .container").innerHTML += "<br/>" + output;

        }
    }

    query.open("GET", url, true);
    query.send();
} 




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

    var btn1 = new Button( 125, 30, "Hello" );
    var btn2 = new Button( 150, 40, "World" );
    var btn3 = new Button( 250, 30);
    btn1.render( buttons1 );
    btn2.render( buttons1 );
    btn3.render( buttons1 );

    var box1 = new Box( 50, 50, "red", "2px solid blue");
    var box2 = new Box( 150, 75);
    box1.render( buttons1 );
    box2.render( buttons1 );

    var btn4 = new Button2( 125, 30, "Hello" );
    var btn5 = new Button2( 150, 40, "World" );
    var btn6 = new Button2( 250, 30);
    btn4.render( buttons2 );
    btn5.render( buttons2 );
    btn6.render( buttons2 );

    useAjax("http://jsonplaceholder.typicode.com/users/");

    var taskOne = $.ajax({ url: 'http://jsonplaceholder.typicode.com/todos/1' });

    var taskTwo = $.ajax({ url: 'http://jsonplaceholder.typicode.com/todos/2' });

    taskOne.done(function () {
        console.log('PromiseOne Done');
    });

    taskTwo.done(function () {
        console.log('PromiseTwo Done');
    });

    $.when(taskOne, taskTwo).done(function () {
      console.log('taskOne and taskTwo are finished');
    });

  




});
