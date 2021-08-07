//all my vars
var currentDate = moment().format("MMM Do YY");
var current24Time = moment();
var current12Time = moment().format("hh:mm:ss a");
//var testTime = moment("14:30:00", "HH:mm:ss a");
var saveButton = document.getElementsByClassName("saveEvent");
// a list of all the boxes in the html
var timeBoxes = [
  {
    daClass: ".12AM",
    beforeTime: moment("0:00:00", "HH:mm:ss a"),
    afterTime: moment("1:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".1AM",
    beforeTime: moment("1:00:00", "HH:mm:ss a"),
    afterTime: moment("2:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".2AM",
    beforeTime: moment("2:00:00", "HH:mm:ss a"),
    afterTime: moment("3:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".3AM",
    beforeTime: moment("3:00:00", "HH:mm:ss a"),
    afterTime: moment("4:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".4AM",
    beforeTime: moment("4:00:00", "HH:mm:ss a"),
    afterTime: moment("5:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".5AM",
    beforeTime: moment("5:00:00", "HH:mm:ss a"),
    afterTime: moment("6:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".6AM",
    beforeTime: moment("6:00:00", "HH:mm:ss a"),
    afterTime: moment("7:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".7AM",
    beforeTime: moment("7:00:00", "HH:mm:ss a"),
    afterTime: moment("8:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".8AM",
    beforeTime: moment("8:00:00", "HH:mm:ss a"),
    afterTime: moment("9:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".9AM",
    beforeTime: moment("9:00:00", "HH:mm:ss a"),
    afterTime: moment("10:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".10AM",
    beforeTime: moment("10:00:00", "HH:mm:ss a"),
    afterTime: moment("11:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".11AM",
    beforeTime: moment("11:00:00", "HH:mm:ss a"),
    afterTime: moment("12:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".12PM",
    beforeTime: moment("12:00:00", "HH:mm:ss a"),
    afterTime: moment("13:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".1PM",
    beforeTime: moment("13:00:00", "HH:mm:ss a"),
    afterTime: moment("14:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".2PM",
    beforeTime: moment("14:00:00", "HH:mm:ss a"),
    afterTime: moment("15:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".3PM",
    beforeTime: moment("15:00:00", "HH:mm:ss a"),
    afterTime: moment("16:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".4PM",
    beforeTime: moment("16:00:00", "HH:mm:ss a"),
    afterTime: moment("17:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".5PM",
    beforeTime: moment("17:00:00", "HH:mm:ss a"),
    afterTime: moment("18:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".6PM",
    beforeTime: moment("18:00:00", "HH:mm:ss a"),
    afterTime: moment("19:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".7PM",
    beforeTime: moment("19:00:00", "HH:mm:ss a"),
    afterTime: moment("20:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".8PM",
    beforeTime: moment("20:00:00", "HH:mm:ss a"),
    afterTime: moment("21:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".9PM",
    beforeTime: moment("21:00:00", "HH:mm:ss a"),
    afterTime: moment("22:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".10PM",
    beforeTime: moment("22:00:00", "HH:mm:ss a"),
    afterTime: moment("23:00:00", "HH:mm:ss a"),
  },
  {
    daClass: ".11PM",
    beforeTime: moment("23:00:00", "HH:mm:ss a"),
    afterTime: moment("24:00:00", "HH:mm:ss a"),
  },
];

// sets up the page when it is first loaded
function setUP() {
  //adds current date and time to the header
  $("#currentDay").append(
    "Today is " + currentDate + " and it is curently " + current12Time
  );
  // colors boxes based on the time
  $(timeBoxes).each(function (i) {
    if (
      timeBoxes[i].beforeTime < moment(current24Time, "HH:mm:ss") &&
      timeBoxes[i].afterTime > moment(current24Time, "HH:mm:ss")
    ) {
      //console.log("is between");
      $(timeBoxes[i].daClass).children().css("background-color", "red");
    } else if (timeBoxes[i].beforeTime > moment(current24Time, "HH:mm:ss")) {
      //console.log("is before");
      $(timeBoxes[i].daClass).children().css("background-color", "green");
    } else if (timeBoxes[i].afterTime < moment(current24Time, "HH:mm:ss")) {
      //console.log("is after");
      $(timeBoxes[i].daClass).children().css("background-color", "gray");
    }
  });
  //gets any events from local storage if their are any
  var prevSetEvent = JSON.parse(localStorage.getItem("events"));
  if (prevSetEvent != null) {
    for (i = 0; i < prevSetEvent.length; i++) {
      $(prevSetEvent[i].hourBox)
        .children("td")
        .children("textarea")
        .text(prevSetEvent[i].textBox);
    }
  }
}

// saves events to local storage
function saveEvent() {
  console.log("saved");
  var toSave = [];
  var tempSave;
  for (i = 0; i < timeBoxes.length; i++) {
    tempSave = {
      hourBox: timeBoxes[i].daClass,
      textBox: $(timeBoxes[i].daClass)
        .children("td")
        .children("textarea")
        .val(),
    };
    toSave.push(tempSave);
  }
  //console.log(tempSave);
  console.log(toSave);
  localStorage.setItem("events", JSON.stringify(toSave));
}

setUP();
//setting listeners on the buttons
for (i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener("click", saveEvent);
}
