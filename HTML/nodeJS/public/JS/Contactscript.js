window.addEventListener('focus', function(event) {
    // Check if the focused element is a text input field or textarea
    if (event.target.matches('input[type="text"], textarea')) {
    // Add highlight class when focused
    event.target.classList.add('highlight');
    }
    }, true); 
    // Remove highlight when focus is lost
    window.addEventListener('blur', function(event) {
    // Check if the blurred element is a text input field or textarea
    if (event.target.matches('input[type="text"], textarea')) {
    // Remove highlight class when focus is lost
    event.target.classList.remove('highlight');
    }
    }, true);
    function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Display the thank you message and reset boxes filled
    alert("Thank you, we will out reach within 5 business days!");
    document.getElementById("s01").reset();
    }
