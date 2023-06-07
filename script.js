function convertTimezone(event) {
  event.preventDefault();

  const inputDateElement = document.getElementById("input-date");
  const inputTimezoneElement = document.getElementById("input-timezone");
  const outputTimezoneElement = document.getElementById("output-timezone");
  const resultElement = document.getElementById("result");

  const inputDateValue = inputDateElement.value;
  const inputTimezoneValue = inputTimezoneElement.value;
  const outputTimezoneValue = outputTimezoneElement.value;

  const convertedDate = moment
    .tz(inputDateValue, inputTimezoneValue)
    .tz(outputTimezoneValue);

  resultElement.textContent = `Converted Date: ${convertedDate.format(
    "dddd, MMMM Do YYYY, h:mm a"
  )}`;
}
