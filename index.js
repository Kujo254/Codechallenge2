// Run the code after the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.getElementById("guest-form");

  // Get the text input where user types the guest name
  const nameInput = document.getElementById("guest-name");

  // Get the list where we will show the guests
  const guestList = document.getElementById("guest-list");

  // When the form is submitted (user clicks Add Guest)
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the page from refreshing

    const name = nameInput.value.trim(); // Get the name the user typed

    // If the name is empty, show an alert
    if (name === "") {
      alert("Please enter a guest name.");
      return;
    }

    // If already 10 guests, don't allow more
    const totalGuests = guestList.children.length;
    if (totalGuests >= 10) {
      alert("You can only invite 10 guests.");
      return;
    }

    // Create a list item to show the guest name
    const listItem = document.createElement("li");
    listItem.textContent = name + " ";

    // Create the RSVP button
    const rsvp = document.createElement("button");
    rsvp.textContent = "Not Attending"; 

    // When RSVP button is clicked, toggle the text
    rsvp.addEventListener("click", function () {
      if (rsvp.textContent === "Attending") {
        rsvp.textContent = "Not Attending";
      } else {
        rsvp.textContent = "Attending";
      }
    });

    // Create the Remove button
    const remove = document.createElement("button");
    remove.textContent = "Remove";

    // When Remove button is clicked, delete this guest
    remove.addEventListener("click", function () {
      guestList.removeChild(listItem);
    });

    // Add the RSVP and Remove buttons to the guest item
    listItem.appendChild(rsvp);
    listItem.appendChild(remove);

    // Add the guest item to the guest list
    guestList.appendChild(listItem);

    // Clear the text input for the next guest
    nameInput.value = "";
  });
});
