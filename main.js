window.onload = function () {
  var startButton = document.getElementById("startButton");
  var stopButton = document.getElementById("stopButton");
  var reset = document.getElementById("reset");
  var seconds = document.getElementById("seconds").innerHTML;
  var seconds = parseInt(seconds);
  var miliseconds = document.getElementById("miliseconds").innerHTML;
  var miliseconds = parseInt(miliseconds);
  var interval;
  // reset button event handler
  reset.onclick = function () {
    //console.log(parseInt(seconds.innerHTML) + 10);
    clearInterval(interval);
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("miliseconds").innerHTML = "00";
  };

  //stop event handler
  stopButton.onclick = function () {
    clearInterval(interval);
  };

  //start eventhandler
  startButton.onclick = function () {
    console.log(seconds);
    clearInterval(interval);
    interval = setInterval(updateTime, 10);
  };

  function updateTime() {
    var seconds = document.getElementById("seconds").innerHTML;
    var seconds = parseInt(seconds);
    var miliseconds = document.getElementById("miliseconds").innerHTML;
    var miliseconds = parseInt(miliseconds);
    miliseconds++;
    document.getElementById("miliseconds").innerHTML = "" + miliseconds;
    if (miliseconds == 100) {
      seconds++;
      if (seconds < 10)
        document.getElementById("seconds").innerHTML = "0" + seconds;
      else document.getElementById("seconds").innerHTML = "" + seconds;
      document.getElementById("miliseconds").innerHTML = "00";
    }
  }
};
