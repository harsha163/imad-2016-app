

var madi = document.getElementById('madi');
var marginLeft= 0;
function moveRight(){
    if(marginLeft>200) marginLeft=0;
    marginLeft = marginLeft+10;
    madi.style.marginLeft =marginLeft+'px';
}
madi.onclick = function(){
    
    var interval = setInterval(moveRight,40);
};
var counter=0;
var sp= document.getElementById("count'");
var button =document.getElementById("counter");
button.onclick = function(){
    
    
    counter=counter+1;
    
    sp.innerHTML= counter.toString();
};