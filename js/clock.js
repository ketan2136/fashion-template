

// document.getElementById('clock');

// // function time() {
// //   var d = new Date();
// //   var s = d.getSeconds();
// //   var m = d.getMinutes();
// //   var h = d.getHours();
// //   span.textContent = 
// //     ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
// // }

// // setInterval(time, 1000);



// function handletime(){

// var countDownDate = new Date("Sep 25, 2025 15:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
    
//     // Time calculations for days, hours, minutes and seconds
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = hours + "h "
//     + minutes + "m " + seconds + "s ";
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
// }

// window.onload = handletime();



// ----------------------------------------------------

function refreshTimer() {
    function countDown() {
      setTimeout(function (now) {
        console.log(now);
        var dif = (td - now) / 1000,
          ss = Math.floor(dif % 60).toString().padStart(2, "0"),
  
          ms = Math.floor(dif / 60 % 60).toString().padStart(2, "0"),
          hs = Math.floor(dif / 3600 % 24).toString().padStart(2, "0"),
          ds = Math.floor(dif / 86400).toString().padStart(2, "0");
        // remainingTime.textContent = dif > 0 ? `${ds} Days ${hs}:${ms}:${ss}`
        //   : "Sorry. You are already late..!";
        remainingTime.textContent = dif > 0 ? `${ds} `
          : "Sorry. You are already late..!";
          Timeremaining1.textContent = dif > 0 ? `${hs}`
          : "Sorry. You are already late..!";
          kime2remaining.textContent = dif > 0 ? `${ms}`
          : "Sorry. You are already late..!";
          second.textContent = dif > 0 ? `${ss}`
          : "Sorry. You are already late..!";
  
        console.log(ss);
        active && countDown();
        this.removeEventListener("change", kill); // possibly redundant
      }, 1000, Date.now());
  
    }
    var td = new Date(this.value),
      active = true,
      kill = _ => active = false;
    this.addEventListener("change", kill);
    countDown();
  }
  
  var targetDateTime = document.getElementById("targetDateTime"),
    remainingTime = document.getElementById("remainingTime");
    Timeremaining1 = document.getElementById("Timeremaining1");
    kime2remaining = document.getElementById("kime2remaining");
    second = document.getElementById("second");
  
  targetDateTime.addEventListener("change", refreshTimer);


  function addtofavrite (v) {
    console.log('555555555555555555');
  }