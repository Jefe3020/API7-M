var currentTime = parseInt(moment().format("HH"));

function assignTimeBlockColor() {
  var timeBlockArray = $(".container .row");

  for (let index = 0; index < timeBlockArray.length; index++) {
    var timeBlock = timeBlockArray[index];

    var textArea = $(timeBlock).find("textarea");
    var blockTime = $(timeBlock).data("time"); //this comes from the data attr

    // compare the block time with the current time from monetjs
    // assign classes based on time
    if (blockTime < currentTime) {
      // assign the "past" class to the element
      textArea.addClass("past");
    } else if (blockTime === currentTime) {
      // assign the "present" class to the element
      textArea.addClass("present");
    } else {
      // assign the future class to the elemtn
      textArea.addClass("future");
    }
  }
}

// initialise the ls as an empty array
// get that array from ls when you need to save a timeblock
// collect the hour and the text
// push them to the prev arr
// push that array back in ls

assignTimeBlockColor();
