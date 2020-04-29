AFRAME.registerComponent('win-lose', {
  schema: {
  },
  init: function()
  {
    let scene = document.querySelector('a-scene');

    this.el.addEventListener("win", function(event)
    {
      state = 2;
      // stop moving animation
      let el_ca = scene.querySelectorAll('[alongpath]');
      for (let i = 0; i < el_ca.length; i++) {
        el_ca[i].removeAttribute('alongpath');
      }
      // avoid clicks
      let el_c = scene.querySelectorAll('.clickable');
      for (let i = 0; i < el_c.length; i++) {
        el_c[i].removeAttribute('class');
      }

      let alogo = document.querySelector('#alogo');
      alogo.setAttribute('visible', 'true');

      you_did_it.play();
      let beer = document.createElement('a-entity');
      beer.setAttribute('position', '-1 0 -8');
      beer.setAttribute('sprite-particles', 'texture: images/duff_t5.png; velocity: 1 1 .1..2 4 0.3; acceleration: 0 -1 0..0 -2 0; seed: 2; spawnRate: 8; particleSize: 300; lifeTime: 5');
      setTimeout(function() {
        scene.appendChild(beer);
      }, 18000);
    }); // End event win

    // defeat
    this.el.addEventListener("lose", function(event)
    {
      state = 2;
      // stop moving virus
      let el_a = scene.querySelectorAll('[alongpath]');
      for (let i = 0; i < el_a.length; i++) {
        el_a[i].removeAttribute('alongpath');
      }
      // avoid clicks
      let el_c = scene.querySelectorAll('.clickable');
      for (let i = 0; i < el_c.length; i++) {
        el_c[i].removeAttribute('class');
      }
      let itsme = document.querySelector('#itsme');
      // lay down
      itsme.setAttribute('animation__rot', 'property: rotation; to: -90 0 0; dur: 600; delay: 100; loop: false;');
      setTimeout(function() {
        jazzt1.stop();
        jazzt2.stop();
        jazzt3.stop();
        sound_fall.play();
      }, 300);
      setTimeout(function() {
        soundgewitter.play();
        scene.setAttribute('rain', 'color:red'); //BLOODRAIN!!!
      }, 2500);
      // you died, but good news - you have toilette paper - for the rest of your life
      setTimeout(function() {
        you_died.play(); // 9 sec
      }, 5000);
      let tp = document.createElement('a-entity');
      tp.setAttribute('position', '-0.5 3 4');
      tp.setAttribute('sprite-particles', 'texture: images/klopapier128.png; velocity: 1 1 .1..2 4 0.3; acceleration: 0 -1 0..0 -2 0; seed: 2; spawnRate: 8; particleSize: 300; lifeTime: 5');
      setTimeout(function() {
        scene.appendChild(tp);
      }, 12000);
    });
  }
});
