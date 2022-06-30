let cube = document.getElementById('cube');
let min = 1;
let max = 24;
cube.onclick = function(){
    let xRand = getRandom(max, min);
    let yRand = getRandom(max, min);
    cube.style.webkitTransform = 'rotateX('+ xRand + 'deg)rotateY('+yRand+'deg)';
    cube.style.transform = 'rotateX('+ xRand +'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min){
    return (Math.floor(Math.random() * (max-min)) + min) * 90;
}