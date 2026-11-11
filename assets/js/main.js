// Play a YouTube recording in place: the thumbnail button is swapped for the player
// only when someone chooses to play it (nothing is loaded from YouTube before that).
document.querySelectorAll('.yt').forEach(function (button) {
  button.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.id + '?autoplay=1&rel=0';
    frame.title = button.dataset.title;
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    button.replaceWith(frame);
    frame.focus();
  });
});
