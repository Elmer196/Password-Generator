var highScore = 0;
var timeleft = 60;
var clockTimer = setInterval(function(){
  if(timeleft <= 0){
    document.getElementById("q5Button3").click(); 
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

document.getElementById("myBtn").addEventListener("click", function(){
    var hide = document.getElementById("div1");
    var show = document.getElementById("div2");
    var showTime = document.getElementById("quizClock");
    if(hide.style.display === "none"){
        hide.style.display = "flex";
    }
    else{
        hide.style.display = "none";
    }

    if(show.style.display === "flex"){
        show.style.display = "none";
    }
    else{
        show.style.display = "flex";
    }

    if(showTime.style.display === "flex"){
        showTime.style.display = "none";
    }
    else{
        showTime.style.display = "flex";
    }
});

document.getElementById("q1Button").addEventListener("click", function(){
    var hide2 = document.getElementById("div2");
    var show2 = document.getElementById("div3");
    timeleft -= 5;
    if(hide2.style.display === "none"){
        hide2.style.display = "flex";
    }
    else{
        hide2.style.display = "none";
    }

   if(show2.style.display === "flex"){
        show2.style.display = "none";
    }
    else{
        show2.style.display = "flex";
    }
});

document.getElementById("q1Button2").addEventListener("click", function(){
    var hide2 = document.getElementById("div2");
    var show2 = document.getElementById("div3");
    timeleft -= 5;
    if(hide2.style.display === "none"){
        hide2.style.display = "flex";
    }
    else{
        hide2.style.display = "none";
    }

   if(show2.style.display === "flex"){
        show2.style.display = "none";
    }
    else{
        show2.style.display = "flex";
    }
});

document.getElementById("q1Button3").addEventListener("click", function(){
    var hide2 = document.getElementById("div2");
    var show2 = document.getElementById("div3");
    highScore += 20;
    document.getElementById("score").innerHTML = highScore;
    if(hide2.style.display === "none"){
        hide2.style.display = "flex";
    }
    else{
        hide2.style.display = "none";
    }

   if(show2.style.display === "flex"){
        show2.style.display = "none";
    }
    else{
        show2.style.display = "flex";
    }
});

document.getElementById("q1Button4").addEventListener("click", function(){
    var hide2 = document.getElementById("div2");
    var show2 = document.getElementById("div3");
    timeleft -= 5;
    if(hide2.style.display === "none"){
        hide2.style.display = "flex";
    }
    else{
        hide2.style.display = "none";
    }

   if(show2.style.display === "flex"){
        show2.style.display = "none";
    }
    else{
        show2.style.display = "flex";
    }
});

document.getElementById("q2Button").addEventListener("click", function(){
    var hide3 = document.getElementById("div3");
    var show3 = document.getElementById("div4");
    timeleft -= 5;
    if(hide3.style.display === "none"){
        hide3.style.display = "flex";
    }
    else{
        hide3.style.display = "none";
    }

   if(show3.style.display === "flex"){
        show3.style.display = "none";
    }
    else{
        show3.style.display = "flex";
    }
});

document.getElementById("q2Button2").addEventListener("click", function(){
    var hide3 = document.getElementById("div3");
    var show3 = document.getElementById("div4");
    highScore += 20;
    document.getElementById("score").innerHTML = highScore;
    if(hide3.style.display === "none"){
        hide3.style.display = "flex";
    }
    else{
        hide3.style.display = "none";
    }

   if(show3.style.display === "flex"){
        show3.style.display = "none";
    }
    else{
        show3.style.display = "flex";
    }
});

document.getElementById("q2Button3").addEventListener("click", function(){
    var hide3 = document.getElementById("div3");
    var show3 = document.getElementById("div4");
    timeleft -= 5;
    if(hide3.style.display === "none"){
        hide3.style.display = "flex";
    }
    else{
        hide3.style.display = "none";
    }

   if(show3.style.display === "flex"){
        show3.style.display = "none";
    }
    else{
        show3.style.display = "flex";
    }
});

document.getElementById("q2Button4").addEventListener("click", function(){
    var hide3 = document.getElementById("div3");
    var show3 = document.getElementById("div4");
    timeleft -= 5;
    if(hide3.style.display === "none"){
        hide3.style.display = "flex";
    }
    else{
        hide3.style.display = "none";
    }

   if(show3.style.display === "flex"){
        show3.style.display = "none";
    }
    else{
        show3.style.display = "flex";
    }
});

document.getElementById("q3Button").addEventListener("click", function(){
    var hide4 = document.getElementById("div4");
    var show4 = document.getElementById("div5");
    timeleft -= 5;
    if(hide4.style.display === "none"){
        hide4.style.display = "flex";
    }
    else{
        hide4.style.display = "none";
    }

   if(show4.style.display === "flex"){
        show4.style.display = "none";
    }
    else{
        show4.style.display = "flex";
    }
});

document.getElementById("q3Button2").addEventListener("click", function(){
    var hide5 = document.getElementById("div4");
    var show5 = document.getElementById("div5");
    timeleft -= 5;
    if(hide5.style.display === "none"){
        hide5.style.display = "flex";
    }
    else{
        hide5.style.display = "none";
    }

   if(show5.style.display === "flex"){
        show5.style.display = "none";
    }
    else{
        show5.style.display = "flex";
    }
});

document.getElementById("q3Button3").addEventListener("click", function(){
    var hide5 = document.getElementById("div4");
    var show5 = document.getElementById("div5");
    timeleft -= 5;
    if(hide5.style.display === "none"){
        hide5.style.display = "flex";
    }
    else{
        hide5.style.display = "none";
    }

   if(show5.style.display === "flex"){
        show5.style.display = "none";
    }
    else{
        show5.style.display = "flex";
    }
});

document.getElementById("q3Button4").addEventListener("click", function(){
    var hide5 = document.getElementById("div4");
    var show5 = document.getElementById("div5");
    highScore += 20;
    document.getElementById("score").innerHTML = highScore;
    if(hide5.style.display === "none"){
        hide5.style.display = "flex";
    }
    else{
        hide5.style.display = "none";
    }

   if(show5.style.display === "flex"){
        show5.style.display = "none";
    }
    else{
        show5.style.display = "flex";
    }
});

document.getElementById("q4Button").addEventListener("click", function(){
    var hide6 = document.getElementById("div5");
    var show6 = document.getElementById("div6");
    timeleft -= 5;
    if(hide6.style.display === "none"){
        hide6.style.display = "flex";
    }
    else{
        hide6.style.display = "none";
    }

   if(show6.style.display === "flex"){
        show6.style.display = "none";
    }
    else{
        show6.style.display = "flex";
    }
});

document.getElementById("q4Button2").addEventListener("click", function(){
    var hide6 = document.getElementById("div5");
    var show6 = document.getElementById("div6");
    timeleft -= 5;
    if(hide6.style.display === "none"){
        hide6.style.display = "flex";
    }
    else{
        hide6.style.display = "none";
    }

   if(show6.style.display === "flex"){
        show6.style.display = "none";
    }
    else{
        show6.style.display = "flex";
    }
});

document.getElementById("q4Button3").addEventListener("click", function(){
    var hide6 = document.getElementById("div5");
    var show6 = document.getElementById("div6");
    highScore += 20;
    document.getElementById("score").innerHTML = highScore;
    if(hide6.style.display === "none"){
        hide6.style.display = "flex";
    }
    else{
        hide6.style.display = "none";
    }

   if(show6.style.display === "flex"){
        show6.style.display = "none";
    }
    else{
        show6.style.display = "flex";
    }
});

document.getElementById("q4Button4").addEventListener("click", function(){
    var hide6 = document.getElementById("div5");
    var show6 = document.getElementById("div6");
    timeleft -= 5;
    if(hide6.style.display === "none"){
        hide6.style.display = "flex";
    }
    else{
        hide6.style.display = "none";
    }

   if(show6.style.display === "flex"){
        show6.style.display = "none";
    }
    else{
        show6.style.display = "flex";
    }
});

document.getElementById("q5Button").addEventListener("click", function(){
    var hide7 = document.getElementById("div6");
    var show7 = document.getElementById("div7");
    var hideTime = document.getElementById("quizClock");
    document.getElementById("score").innerHTML = "Your high score: " + highScore;
    if(hide7.style.display === "none"){
        hide7.style.display = "flex";
    }
    else{
        hide7.style.display = "none";
    }

   if(show7.style.display === "flex"){
        show7.style.display = "none";
    }
    else{
        show7.style.display = "flex";
    }

    if(hideTime.style.display === "flex"){
        hideTime.style.display = "none";
    }
    else{
        hideTime.style.display = "flex";
    }
});

document.getElementById("q5Button2").addEventListener("click", function(){
    var hide7 = document.getElementById("div6");
    var show7 = document.getElementById("div7");
    var hideTime = document.getElementById("quizClock");
    document.getElementById("score").innerHTML = "Your high score: " + highScore;
    if(hide7.style.display === "none"){
        hide7.style.display = "flex";
    }
    else{
        hide7.style.display = "none";
    }

   if(show7.style.display === "flex"){
        show7.style.display = "none";
    }
    else{
        show7.style.display = "flex";
    }

    if(hideTime.style.display === "flex"){
        hideTime.style.display = "none";
    }
    else{
        hideTime.style.display = "flex";
    }
});

document.getElementById("q5Button3").addEventListener("click", function(){
    var hide7 = document.getElementById("div6");
    var show7 = document.getElementById("div7");
    var hideTime = document.getElementById("quizClock");
    timeleft= 60;
    document.getElementById("score").innerHTML = "Your high score: " + highScore;
    if(hide7.style.display === "none"){
        hide7.style.display = "flex";
    }
    else{
        hide7.style.display = "none";
    }

   if(show7.style.display === "flex"){
        show7.style.display = "none";
    }
    else{
        show7.style.display = "flex";
    }

    if(hideTime.style.display === "flex"){
        hideTime.style.display = "none";
    }
    else{
        hideTime.style.display = "flex";
    }
});

document.getElementById("q5Button4").addEventListener("click", function(){
    var hide7 = document.getElementById("div6");
    var show7 = document.getElementById("div7");
    var hideTime = document.getElementById("quizClock");
    highScore += 20;
    document.getElementById("score").innerHTML = "Your high score: " + highScore;
    if(hide7.style.display === "none"){
        hide7.style.display = "flex";
    }
    else{
        hide7.style.display = "none";
    }

   if(show7.style.display === "flex"){
        show7.style.display = "none";
    }
    else{
        show7.style.display = "flex";
    }

    if(hideTime.style.display === "flex"){
        hideTime.style.display = "none";
    }
    else{
        hideTime.style.display = "flex";
    }
});

document.getElementById("turnIn").addEventListener("click", function(){
    timeleft = 60;
    highScore = 0;
    var hide8 = document.getElementById("div7");
    var show8 = document.getElementById("div8");   
    var nameValue = document.getElementById("userName").value;
    var node = document.createElement("LI");
    var textNode = document.createTextNode("Name: " + nameValue + " - Highscore: " + highScore);
    node.appendChild(textNode);
    document.getElementById("displayName").appendChild(node);
        
    
    if(hide8.style.display === "none"){
        hide8.style.display = "flex";
    }
    else{
        hide8.style.display = "none";
    }

    if(show8.style.display === "flex"){
        show8.style.display = "none";
    }
    else{
        show8.style.display = "flex";
    }


});

document.getElementById("goBack").addEventListener("click", function(){
    var hide9 = document.getElementById("div8");
    var show9 = document.getElementById("div1");

    if(hide9.style.display === "none"){
        hide9.style.display = "flex";
    }
    else{
        hide9.style.display = "none";
    }

    if(show9.style.display === "flex"){
        show9.style.display = "none";
    }
    else{
        show9.style.display = "flex";
    }


});

document.getElementById("clearHS").addEventListener("click", function(){
    highScore = 0;
    var removeHS = document.getElementById("displayName");

    while (removeHS.hasChildNodes()) {  
    removeHS.removeChild(removeHS.firstChild);
    }


});





