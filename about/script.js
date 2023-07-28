function openlink() {
  window.location.replace("../index.html");
}

var score=0;
function clicked(){
  score++;
  document.getElementById("poop").innerHTML="Score: "+score;
}
