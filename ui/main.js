

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
        if(req.readyState===XMLHttpRequest.DONE){
            if(req.status===200){
                var counter = req.responseText;
                sp.innerHTML = counter.toString();
            }
        }
    };
    req.open('GET',"http://harsha163.imad.hasura-app.io/counter",true);
    req.send(null);
    
};


var nameIn=document.getElementById('name');
var nameg = nameIn.value;
var submitButon=document.getElementById("submit");
submitButon.onclick = function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namesList');
    ul.innerHTML = list;
};
