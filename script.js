document.addEventListener("DOMContentLoaded", function () {
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const adultsInput = document.getElementById("adults");
    const childrenInput = document.getElementById("children");

    const checkinDisplay = document.getElementById("checkin-display");
    const checkoutDisplay = document.getElementById("checkout-display");
    const adultsDisplay = document.getElementById("adults-display");
    const childrenDisplay = document.getElementById("children-display");

    // Function to update book details in real-time
    function updateDetails() {
        checkinDisplay.textContent = checkinInput.value || "____/____/____";
        checkoutDisplay.textContent = checkoutInput.value || "____/____/____";
        adultsDisplay.textContent = adultsInput.value || "0";
        childrenDisplay.textContent = childrenInput.value || "0";
    }

    // Event listeners for changes in input fields
    checkinInput.addEventListener("input", updateDetails);
    checkoutInput.addEventListener("input", updateDetails);
    adultsInput.addEventListener("change", updateDetails);
    childrenInput.addEventListener("change", updateDetails);
});

