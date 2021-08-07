var currentDate = moment().format("MMM Do YY");
var currentTime = moment().format("hh:mm:ss a");
var testTime = moment("1:30:00", "hh:mm:ss a");
var dayOrNight = moment().diff(moment().startOf("day"), "hours");
var timeBoxes = [
  {
    daClass: $(".12AM"),
    beforeTime: moment("11:59:59", "hh:mm:ss a"),
    afterTime: moment("12:59:59", "hh:mm:ss a"),
    isDay: true,
  },
];
console.log(currentDate);
console.log(currentTime);

function setUP() {
  $("#currentDay").append(
    "Today is " + currentDate + " and it is curently " + currentTime
  );
  $(timeBoxes).each(function (i) {
    var isAM;
    if (dayOrNight > 12) {
      isAM = true;
    } else {
      isAM = false;
    }
    if (
      timeBoxes[i].beforeTime < testTime &&
      timeBoxes[i].afterTime > testTime
    ) {
      console.log("is between");
    } else if (timeBoxes[i].beforeTime > testTime) {
      console.log("is before");
    } else if (timeBoxes[i].afterTime < testTime) {
      console.log("is after");
    }
  });
}

setUP();
