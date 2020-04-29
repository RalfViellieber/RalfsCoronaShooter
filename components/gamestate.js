var past_time = -120; // sec game running
var tplaytime;
var state = 0; // 0 = waiting, 1 = running, 2 = finish

AFRAME.registerComponent('gamestate', {

  init: function () {
    var el = this.el;

    tplaytime = document.querySelector('#playtime');

    this.throttledFunction = AFRAME.utils.throttle(this.everySecond, 1000, this);

    el.addEventListener('startgame', () => {
      past_time = 0;
      state = 1; // game running
      let alogo = document.querySelector('#alogo');
      alogo.setAttribute('visible', 'false');
    });
  },
  everySecond: function () {
      // Called every second.
      if (state == 1) { // if running
        past_time++;
        tplaytime.setAttribute('text', `value: ${past_time}`);
        // console.log("A second passed:" + past_time);
        switch(past_time) {
          case 4:
          jazzt1.play();
          // scene.emit('win');
          break;
        case 44:
          jazzt2.play();
          break;
        case 86:
          jazzt3.play();
        break;
        case 130:
          state = 2;
          past_time = 130; // victory;
          let scene = document.querySelector('a-scene');
          scene.emit('win');
        break;
        default:
        }
      }
    },

    tick: function (t, dt) {
      this.throttledFunction();  // Called once a second.
     },
});
