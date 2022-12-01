const playVideo = () => {
  const playButton = document.querySelector('.gym__link');
  let YT = window.YT;
  let player;
  playButton.addEventListener('click', (evt) => {
    evt.preventDefault();
  });
  playButton.addEventListener('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '228',
      width: '100%',
      videoId: '9TZXsZItgdw',
      events: {
        'onReady': videoPlay,
      },
    });
  });

  const videoPlay = (event) => {
    event.target.playVideo();
  };
};

export {playVideo};
