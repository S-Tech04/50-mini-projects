const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute('dots');
    var points = '';
    var rotate = 360/dots;
    for (var i = 0; i < dots; i++) {
        points+= `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`
    };
    elem.innerHTML = points;
})