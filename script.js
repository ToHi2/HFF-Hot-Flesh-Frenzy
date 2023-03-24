function shootFunc(){
  var pos = document.getElementById("man").offsetLeft;
  var point = (pos*1)+27 + "px";
  if(1==1){
        document.getElementById("bullet").style.left=point;
  }
if(0==0){
  document.getElementById("bullet").className="d"
}
}
function moveLeft(){
  var a = document.getElementById("man").offsetLeft;
  var cord = (a*1) - 70;
  document.getElementById("man").style.left = cord + "px";
}
function moveRight() {
  var a = document.getElementById("man").offsetLeft;
  var cord = (a * 1) + 70;
  document.getElementById("man").style.left = cord + "px";
}
function moveDown(){
  var a = document.getElementById("zman").offsetTop;
  var cord = (a*1) + 1;
  document.getElementById("zman").style.top = cord + "px";
}
function moveDowna() {
  var a = document.getElementById("zmana").offsetTop;
  var cord = (a * 1) + 1;
  document.getElementById("zmana").style.top = cord + "px";
}
function moveDownb() {
  var a = document.getElementById("zmanb").offsetTop;
  var cord = (a * 1) + 1;
  document.getElementById("zmanb").style.top = cord + "px";
}
function moveDownc() {
  var a = document.getElementById("zmanc").offsetTop;
  var cord = (a * 1) + 1;
  document.getElementById("zmanc").style.top = cord + "px";
}
function moveDownd() {
  var a = document.getElementById("zmand").offsetTop;
  var cord = (a * 1) + 1;
  document.getElementById("zmand").style.top = cord + "px";
}
function moveDownf() {
  var a = document.getElementById("zmand").offsetTop;
  var cord = (a * 1) + 2;
  document.getElementById("fzman").style.top = cord + "px";
}
function limitMk(){
  var p = document.getElementById("man").offsetLeft;
  if(p<10){
    document.getElementById('man').style.left="290px";
  }
  if(p>290){
    document.getElementById('man').style.left="10px";
  }

}

function confSht(){
 var p = document.getElementById('man').offsetLeft;
 var z = document.getElementById('zman').offsetLeft;
 var za = document.getElementById('zmana').offsetLeft;
 var zb = document.getElementById('zmanb').offsetLeft;
 var zc = document.getElementById('zmanc').offsetLeft;
 var zd = document.getElementById('zmand').offsetLeft;
 
 var hp = document.getElementById("hp").innerText;
  var hpa = document.getElementById("hpa").innerText;
   var hpb = document.getElementById("hpb").innerText;
    var hpc = document.getElementById("hpc").innerText;
    var hpd = document.getElementById("hpd").innerText;
    var hhp = (hp*1)-1;
    var hhpa = (hpa*1)-1;
    var hhpb = (hpb*1)-1;
    var hhpc = (hpc*1)-1;
    var hhpd = (hpd*1)-1;
    if(p == z){
      document.getElementById("hp").innerHTML=hhp;
    }
    if(p == za){
      document.getElementById("hpa").innerHTML=hhpa;
    }
    if (p == zb) {
      document.getElementById("hpb").innerHTML=hhpb;
    }
    if (p == zc) {
      document.getElementById("hpc").innerHTML=hhpc;
    }
    if (p == zd){
      document.getElementById("hpd").innerHTML=hhpd;
    }
    
}
function confStat(){
  var hp = document.getElementById("hp").innerText*1;
  var hpa = document.getElementById("hpa").innerText;
   var hpb = document.getElementById("hpb").innerText;
    var hpc = document.getElementById("hpc").innerText;
    var hpd = document.getElementById("hpd").innerText;
    var sc = document.getElementById("score").innerText;
    var scr = (sc*1)+1;
    if(hp<=0||hpa<=0||hpb<=0||hpc<=0||hpd<=0){
      document.getElementById("score").innerHTML= scr;
    }
    if(hp<= 0){
      document.getElementById("zman").className ="h";
    }
    if(hpa <= 0){
      document.getElementById("zmana").className ="h";
    }
    if (hpb <= 0) {
      document.getElementById("zmanb").className = "h";
    }
    if (hpc <= 0) {
      document.getElementById("zmanc").className = "h";
    }
    if (hpd <= 0) {
      document.getElementById("zmand").className = "h";
    }
    if(hp<=0){
      setTimeout('showZ()',900)
    }
   if(hpa<=0){
      setTimeout('showZa()',900)
    }
if(hpb<=0){
      setTimeout('showZb()',900)
    }
if(hpc<=0){
      setTimeout('showZc()',900)
    }
if(hpd<=0){
      setTimeout('showZd()',900)
    }
  
    if (hp <= 0) {
      document.getElementById("hp").innerHTML = "2";
    }
    if (hpa <= 0) {
      document.getElementById("hpa").innerHTML = "2";
    }
    if (hpb <= 0) {
      document.getElementById("hpb").innerHTML = "2";
    }
    if (hpc <= 0) {
      document.getElementById("hpc").innerHTML = "2";
    }
    if (hpd <= 0) {
      document.getElementById("hpd").innerHTML = "2";
    }
}
function showZ(){
  document.getElementById("zman").className="d"
}
function showZa(){
  document.getElementById("zmana").className="d"
}function showZb(){
  document.getElementById("zmanb").className="d"
}function showZc(){
  document.getElementById("zmanc").className="d"
}function showZd(){
  document.getElementById("zmand").className="d"
}
function gameOver(){
  var p = document.getElementById('man').offsetTop;
  var z = document.getElementById('zman').offsetTop;
  var za = document.getElementById('zmana').offsetTop;
  var zb = document.getElementById('zmanb').offsetTop;
  var zc = document.getElementById('zmanc').offsetTop;
  var zd = document.getElementById('zmand').offsetTop;
  var dz = (z*1)+50;
  var dza = (za*1)+50;
  var dzb = (zb*1)+50;
  var dzc = (zc*1)+50;
  var dzd = (zd*1)+50;
  if (dz >= p || dza >= p || dzb >= p || dzc >= p || dzd >= p) {
    location.href = "/index.html"
  }
  if(dz>=p||dza>=p||dzb>=p||dzc>=p||dzd>=p){
    alert("Game Over! You lose...")
  }
}
function shotEff(){
  aud = new Audio("/shot.mp3")
  aud.play();
}
function highScr(){
 var score = document.getElementById("score").innerText*1;
 var prescore=document.getElementById("pscore").innerText*1;
 if(score>prescore){
   localStorage.highScore = document.getElementById("score").innerText;
 }
 if(score>prescore){
   document.getElementById("pscore").innerHTML=score;
 }
}
function loadScore(){
  var n = localStorage.highScore;
   if( n != null && n != undefined && n != NaN){
     document.getElementById("hs").innerHTML = localStorage.highScore;
   }
}
function preloadScore(){
  var n = localStorage.highScore;
   if( n != null && n != undefined && n != NaN){
     document.getElementById("pscore").innerHTML = localStorage.highScore;
   }
}
