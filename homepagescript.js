// Video javascript
var myVid = document.getElementById("video");

function playPause() {
  if (myVid.paused)
    myVid.play();
  else
    myVid.pause();
}

function makeBig() {
  myVid.width = 650;
}

function makeSmall() {
  myVid.width = 300;
}

function makeNormal() {
  myVid.width = 420;
}

// Tab javascript
$('.tab-list').each(function() {
  var $this = $(this);
  var $tab = $this.find('li.active');
  var $link = $tab.find('a');
  var $panel = $($link.attr('href'));

  $this.on('click', '.tab-control', function(e) {
    e.preventDefault();
    var $link = $(this),
      id = this.hash;

    if (id && !$link.is('.active')) {
      $panel.removeClass('active');
      $tab.removeClass('active');

      $panel = $(id).addClass('active');
      $tab = $link.parent().addClass('active');
    }
  });
});
