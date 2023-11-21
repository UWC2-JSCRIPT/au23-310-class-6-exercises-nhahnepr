$(document).ready(function () {

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
let aElement = $(document.createElement('a')).attr('id', 'cta');
aElement.text("Buy Now!");
$("p").append(aElement);
aElement.insertAfter("p");
// Access (read) the data-color attribute of the <img>,
// log to the console
console.log($('img').attr('data-color'));
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
$("li").eq(2).addClass("highlight");
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$("p").filter(":contains('Available')").remove();
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
aElement.on("click", function() {
    aElement.text("Added to Cart");
});

//const $h1 = $('header')
//const h1Alt = document.getElementById('header')
//const $allDivs = $('div')
//const divsWithClass = $('.class')
//const divWithUniqueId = $('#thisOneGuy')
});