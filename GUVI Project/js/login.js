$(document).ready(function() {
    // Function to handle form submission
    $('#loginForm').submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the values from the form fields
        var username = $('#username').val();
        var password = $('#password').val();

        // Perform AJAX request to login endpoint
        $.ajax({
            url: 'login.php', // Replace 'login.php' with your actual backend endpoint
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // Handle successful login
                console.log('Login successful');
                // Redirect to profile page or perform any other action
                window.location.href = 'profile.html'; // Replace 'profile.html' with your profile page
            },
            error: function(xhr, status, error) {
                // Handle login error
                console.error('Login error:', error);
                // Display error message to user (optional)
                alert('Login failed. Please try again.');
            }
        });
    });
});