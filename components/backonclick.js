// move virus back to start point
AFRAME.registerComponent('backonclick', {
  schema: {
    nr: {type: 'number'}, // number of virus
  },
  init: function()
  {
    let el = this.el;
    let pusten = document.querySelector('#sound_pusten');
    let scene = document.querySelector('a-scene');

    el.addEventListener("click", function(event)
    {
      console.log("back");
      // stop random moving alongpath
      el.removeAttribute('alongpath');
      pusten.play();
      hitVirus++; // make animation faster
      el.emit('back'); // move back
    });
  }
});
