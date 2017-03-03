'use strict';
/*
* Novicell master
*  Author: APN modified by DLA
*  Use this file to call functions in other files, on document ready, window.resize etc.
*/

var novicell = novicell || {};
var projectName = projectName || {};

// Document ready
$(function () {
    // Only include Novicell functions that you use!
    novicell.cookieInfo.init();
    novicell.embed.onLoad(); 

    // Call new functions here like this:
    //projectName.slider.heroSlider($('.owl-carousel'));
    svg4everybody(); // Fix SVG spritemap in IE/Edge

    var evens = [];
    var odds = evens.map(v => v + 1);
    var pairs = evens.map(v => ({ even: v, odd: v + 1 }));
    var nums = evens.map((v, i) => v + i);

}); // Document ready end


/*
*  Use the following if needed
*/

// Window load
// $(window).load(function(e){
//     // call functions here
// }); // Window load

// Window resize (debounced)
$(window).smartresize(function(e){
    novicell.embed.onResize();
}); // Window resize

// Window scroll (debounced)
$(window).smartscroll(function (e) {
    // call functions here
    novicell.embed.onScroll();
}); // Window scroll