var pin = 0;
var password = 0;
var count = 3;
//Get Random 4 digit number
var generateBtn = document.getElementById("generate-button");
var randomInput = document.getElementById("random-input");
generateBtn.addEventListener("click", function () {
  var randomPin = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  randomInput.value = randomPin;
  pin = parseInt(randomInput.value);
});

//Number Button Click Operation
var digitBtn = document.querySelectorAll(".digit");
digitBtn.forEach((element) => {
  element.addEventListener("click", function () {
    var pinInput = document.getElementById("pin-input");
    var initialValue = pinInput.value;
    if (initialValue.length <= 3) {
      pinInput.value = initialValue.concat(element.innerHTML);
      password = parseInt(pinInput.value);
    }
  });
});

//Delete Button Click
var deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", function () {
  var pinInput = document.getElementById("pin-input");
  var initialValue = pinInput.value;
  var newValue = initialValue.slice(0, -1);
  pinInput.value = newValue;
});

//Reset Button Click
var resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  var pinInput = document.getElementById("pin-input");
  pinInput.value = "";
});

//Submit Button Click
var submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", function () {
  if (!pin || !password) {
    console.log("Enter Pin and Password");
  } else {
    if (pin == password) {
      document.getElementById("match").style.display = "block";
      document.getElementById("not-match").style.display = "none";
    } else {
      document.getElementById("not-match").style.display = "block";
      document.getElementById("match").style.display = "none";
      count--;
      document.getElementById("action").innerHTML = count;
      if (count == 0) {
        submitBtn.innerHTML = "Submit Disabled";
        submitBtn.disabled = true;
        document.getElementById("not-match").innerHTML =
          "❌ Too many unsuccessful attempts.";
      }
    }
  }
});
