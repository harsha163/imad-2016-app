

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
var req = new XMLHttpRequest();

var sp= document.getElementById("count");
var button =document.getElementById("counter");
button.onclick = function(){
    req.onreadystatechange = function(){
        if(req.readyState===XMLHttpRequest.Done){
            if(req.status===200){
                var counter = req.responseText;
                sp.innerHTML = counter.toString();
            }
        }
    };
};