// Validate form before submission
function validateForm() {
    var quantityInput = document.getElementById("quantitynum").value;
    
    if (quantityInput === "" || isNaN(quantityInput) || parseInt(quantityInput) < 1 || parseInt(quantityInput) > 10) {
        document.getElementById("quantityFeedback").innerText = "Please enter a positive number between 1 and 10 for quantity.";
        return false; 
    } else {
        document.getElementById("quantityFeedback").innerText = "";
        return true; 
    }
}

// Add an event listener to the form for submission validation
document.getElementById("quantityc").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});


// Calender msg alert
document.getElementById('calendar-msg').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of following the link
    alert('Not available... coming Summer 2024');
});