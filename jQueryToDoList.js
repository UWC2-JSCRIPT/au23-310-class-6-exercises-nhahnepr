$(document).ready(function () {
/**
 * Toggles "done" class on <li> element. If an <li> element is clicked, toggle the class "done" on the <li>
 */
$("li").click(function(event){
  $(this).addClass("done");
});
/**
 * Delete element when delete link clicked. If the Delete <a> is clicked, remove the <li>
 */
$(".delete").on("click", function(event){
	event.preventDefault();
  $(this).fadeOut(function(){$(this).closest("li").remove()});
});
/**
 * Adds new list item to <ul>. If an 'Add' link is clicked, adds the item as a new list item to the list
 */

$(".add-item").click(function(){
  let myList = $("#new-todo").val();
  console.log(myList);
  $(".today-list").append('<li>'+myList+'</li>');
  return false;
});
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
};

// add listener for add
});