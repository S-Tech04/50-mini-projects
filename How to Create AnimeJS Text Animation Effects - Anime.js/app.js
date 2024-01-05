const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")

var textAnime = anime.timeline({
   targets: '.text span',
   easing: 'easeOutExpo',
   loop: true,
   delay: anime.stagger(100),
   duration: 1500 , // 1.5 seconds
})

textAnime.add({
   translateY: [-600,0], //[start value, end Value]
   scale: [10, 1],
   opacity: [0, 1]
}).add({
   translateX: [0,-1000], //[start value, end Value]
   scale: [1, 15],
   opacity: [1, 0]
}).add({
   translateX: [1000, 0], //[start value, end Value]
   scale: [15, 1],
   opacity: [0, 1]
}).add({
   translateX: [0, 0], //[start value, end Value]
   scale: [1, 50],
   opacity: [1, 0]
})