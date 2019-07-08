/* Exercise 1: Wish list */

function addToList(item) {
  $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span></li>'); // #items ; id = "items"
};

function updateTotal() {
  completed = $('.completed').length; // .completed = class = "completed"
  pending = $('.pending').length;

  if (completed > 0 || pending > 0) {
    $('span.total').text('Pending: ' + pending + ' Completed: ' + completed);
  }
}

$(document).on('click', '#add-to-list', function() {
  item = $('#item').val();

  $('#item').val(''); // Reset textbox value
  $('#item').focus(); // Place cursor back in textbox after click

  addToList(item);
  updateTotal();
});

$(document).on('click', '.pending', function () {
  li_node = $(this).parent();
  li_node.append('<span class=\'label success\'>Done!</span>');
  li_node.addClass('completed');
  $(this).remove(); // Removes the current element (pending)
  updateTotal();
});
