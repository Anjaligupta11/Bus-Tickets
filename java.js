document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // You can implement further processing and booking logic here
    // For this simplified example, we'll just display an alert
    const message = `Booking Details:
                      Name: ${name}
                      Destination: ${destination}
                      Date of Travel: ${date}
                      Number of Seats: ${seats}`;

    alert(message);
  });
