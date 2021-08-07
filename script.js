var currentDate = moment().format("MMM Do YY");
var current24Time = moment().format("HH:mm:ss a");
var current12Time = moment().format("hh:mm:ss a");
var testTime = moment("0:30:00", "HH:mm:ss a");
var dayOrNight = moment().diff(moment().startOf("day"), "hours");
var testDayNight = 11;
var timeBoxes = [
  {
    daClass: ".12AM",
    beforeTime: moment("0:00:00", "HH:mm:ss a"),
    afterTime: moment("1:00:00", "HH:mm:ss a"),
  },
];
//console.log(currentDate);
//console.log(current24Time);
//console.log(current12Time);

function setUP() {
  $("#currentDay").append(
    "Today is " + currentDate + " and it is curently " + current12Time
  );
  $(timeBoxes).each(function (i) {
    if (
      timeBoxes[i].beforeTime < testTime &&
      timeBoxes[i].afterTime > testTime
    ) {
      //console.log("is between");
      $(timeBoxes[i].daClass).children().css("background-color", "red");
    } else if (timeBoxes[i].beforeTime > testTime) {
      //console.log("is before");
      $(timeBoxes[i].daClass).children().css("background-color", "green");
    } else if (timeBoxes[i].afterTime < testTime) {
      //console.log("is after");
      $(timeBoxes[i].daClass).children().css("background-color", "gray");
    }
  });
}

setUP();
