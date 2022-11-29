var bar = document.querySelector('.bars')
var close = document.querySelector('.close')
var nav_mobile = document.querySelector(".navbar-mobile")
bar.addEventListener('click', ()=> {
  nav_mobile.classList.toggle('show')
})


close.addEventListener('click', ()=> {
  nav_mobile.classList.toggle('show')
})

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVubW93IiwiYSI6ImNsYTdoeWk5cDEzaTQzdm44cjNpd3dwb2kifQ.3o1P5Wt6w8w5WDviT_bHKA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-51.3256, -30.195246],
    zoom: 8
  });