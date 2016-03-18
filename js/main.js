var $body = $('body');

$('html').on('keydown', function () {
  var $newDiv = $('<div>');
  var $newLeft = Math.random() * 1000;
  var $newTop = Math.random() * 1000;

  $newDiv.css('left', $newLeft);
  $newDiv.css('top', $newTop);
  $newDiv.addClass('ball');
  $('body').append($newDiv);
});
