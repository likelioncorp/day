window.onload = function() {
  var days, hours, minutes, seconds;
  var target_date = new Date("11,12,2015").getTime();
  var d_day = document.getElementById("d-day");

  function countdown() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;  

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    return days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초";
  }
}
