document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  const form = document.querySelector('form');
  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbzXAG81OGUtjbeuG0zYoGnv1xtNP-wapxdb3k2AT0TTsTofkXtS7YflFqxfa1qcgmQw/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
  const inputs = form.querySelectorAll('input, textarea');
  for (const input of inputs)
    input.value = '';

});