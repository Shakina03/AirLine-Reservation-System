
document.getElementById("flight-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departure = document.getElementById("departure").value;
    const returnDate = document.getElementById("return").value;

    const flights = searchFlights(from, to, departure, returnDate);
    displayFlights(flights);
  });
  
  document.getElementById("passenger-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
//displaying details from the selected flight
	const from = document.getElementById("from").value;
  	const to = document.getElementById("to").value;
  const departure = document.getElementById("departure").value;
  const returnDate = document.getElementById("return").value;
  
    alert(`Reservation Confirmed!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

//admin view
  document.getElementById("admin-name").textContent = name;
  document.getElementById("admin-email").textContent = email;
  document.getElementById("admin-phone").textContent = phone;
  document.getElementById("admin-from").textContent = from;
  document.getElementById("admin-to").textContent = to;
  document.getElementById("admin-departure").textContent = departure;
  document.getElementById("admin-return").textContent = returnDate || "N/A";
  document.getElementById("admin-passenger-form").style.display = "block";
    });
    
  
  function searchFlights(from, to, departure, returnDate) {
   
    return [
      {
        id: 1,
        flightNumber: "AI101",
        from: from,
        to: to,
        departure: departure,
        return: returnDate,
        price: "$500",
      },
      {
        id: 2,
        flightNumber: "AI102",
        from: from,
        to: to,
        departure: departure,
        return: returnDate,
        price: "$600",
      },
    ];
  }
  
  function displayFlights(flights) {
    const flightsList = document.getElementById("flights-list");
    flightsList.innerHTML = ""; // Clear previous flight options
  
    flights.forEach((flight) => {
      const flightOption = document.createElement("div");
      flightOption.classList.add("flight-option");
  
      flightOption.innerHTML = `
        <strong>Flight: ${flight.flightNumber}</strong><br>
        From: ${flight.from} To: ${flight.to}<br>
        Departure: ${flight.departure}<br>
        Return: ${flight.return}<br>
        Price: ${flight.price}<br>
        <button onclick="selectFlight(${flight.id})">Select Flight</button>
      `;
  
      flightsList.appendChild(flightOption);
    });
  }
  
  function selectFlight(flightId) {
    const selectedFlight = document.querySelector(`.flight-option button[onclick="selectFlight(${flightId})"]`).parentNode;

    const passengerForm = document.getElementById("passenger-form");
  
    // Display passenger form after flight selection
    selectedFlight.style.backgroundColor = "#e0f7fa"; // Highlight selected flight
    passengerForm.style.display = "block"; // Show passenger form
  }
