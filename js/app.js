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
