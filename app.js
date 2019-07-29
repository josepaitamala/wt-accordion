/*
 * @author "Jose Paitamala" <josepaitamala@gmail.com>
 */

// Make an Ajax request to get data from API
$.get('http://api.myjson.com/bins/jw3rg', function( data ) {
    var accordion = '<div class="js-accordion accordion">';
    $(data.faqs).each( function(i,el) {
        accordion += '<div class="accordion__title">Q: '+el.question+'</div>';
        accordion += '<div class="accordion__content">'+el.answer+'</div>'; 
    });
    accordion += '</div>';

    // Append the accordion html
    $('.js-app').html(accordion);

    // Initialize the accordion
    $('.js-accordion').accordion();

}).fail(function() {
    $('.js-result').html('<p>There was an error, please try again later</p>');
});