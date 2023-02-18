


// let calcScrollValue = () => {
//   let scrollProgress = document.getElementById
//   ("progresS");

//   let progressValue = document.getElementById
//   ("progress-value");
//   let pos = document.documentElement.scrollTop;
//   let calcHight = 
//    document.documentElement.scrollHeight -
//    document.documentElement.clientHeight;
//  let scrollValue = Math.round((pos * 100) / calcHight);
//  if(pos>100){
//   scrollProgress.style.display = "grid";
//  }
//   else {
//     scrollProgress.style.display = "none";
//   }
//   scrollProgress.addEventListener("click", () => {
//     document.documentElement.scrollTop = 0;
//   });
 
//   scrollProgress.style.background = `conic-gradient(#0a70dd ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 
// };
// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;






var countDownDate = new Date("july 10, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x)
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;
    }

},1000);


let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progresS");
  
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHight = 
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100) / calcHight);
   if(pos>100){
    scrollProgress.style.display = "grid";
   }
    else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
   
    scrollProgress.style.background = `conic-gradient(#0a70dd ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
   
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
