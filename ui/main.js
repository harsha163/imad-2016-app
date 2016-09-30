console.log('Loaded!');

var madi = document.getElementById('madi');
var marginLeft= 0;
function moveRight(){
    if(marginLeft>200) marginLeft=0;
    marginLeft = marginLeft+10;
    madi.style.marginLeft =marginLeft+'px';
}
madi.onclick = function(){
    
    var interval = setInterval(moveRight,10);
};