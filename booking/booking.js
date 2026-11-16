const bookingForm = document.querySelector(".bookingForm");
const successMessage = document.querySelector(".success-message");

// bookingForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     successMessage.style.display = "block";

//     bookingForm.style.display = "none";

// });


bookingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const bookingData = {

        full_name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        persons: document.getElementById("persons").value,

        travel_date: document.getElementById("date").value,

        package_name: document.getElementById("package").value

    };

    try {

        const response = await fetch("http://localhost:3000/bookings", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(bookingData)

        });

        const result = await response.json();

        if (response.ok) {

            bookingForm.style.display = "none";

            successMessage.style.display = "block";

            successMessage.innerHTML = `
                <h2>🎉 Booking Successful!</h2>

                <p>${result.message}</p>

                <p>
                    Your Booking ID is:
                    <strong>${result.booking_id}</strong>
                </p>

                <p>
                    Thank you for choosing Explore World.
                </p>
            `;

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.log(error);

        alert("Unable to connect to the booking server.");

    }

});