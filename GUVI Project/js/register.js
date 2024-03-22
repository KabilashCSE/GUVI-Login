// Existing code in register.js (if any)
$(document).ready(function() {
    // Your existing code here...
    // For example:
    // $("button").click(function(){
    //     $("p").hide();
    // });
});

// New code for handling form submission with AJAX
$(document).ready(function() {
    // Function to handle form submission
    $("#registerForm").submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Serialize form data
        var formData = $(this).serialize();

        // AJAX request to register.php
        $.ajax({
            type: "POST",
            url: "register.php",
            data: formData,
            success: function(response) {
                // Log success message to console
                console.log(response);
                // Optionally, display a success message to the user
                alert("User registered successfully!");
            },
            error: function(xhr, status, error) {
                // Log error message to console
                console.error("Error:", error);
                // Optionally, display an error message to the user
                alert("Failed to register user. Please try again later.");
            }
        });
    });
});
