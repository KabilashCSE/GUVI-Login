$(document).ready(function() {
    // Function to load profile details
    function loadProfileDetails() {
        // Perform AJAX request to fetch profile details
        $.ajax({
            url: 'profile.php', // Replace 'profile.php' with your actual backend endpoint
            method: 'GET',
            success: function(response) {
                // Parse response data and update profile details on the page
                var profileData = JSON.parse(response);
                $('#age').val(profileData.age);
                $('#dob').val(profileData.dob);
                $('#contact').val(profileData.contact);
            },
            error: function(xhr, status, error) {
                // Handle error when fetching profile details
                console.error('Error loading profile details:', error);
                // Display error message to user (optional)
                alert('Failed to load profile details. Please try again.');
            }
        });
    }

    // Load profile details when the page is ready
    loadProfileDetails();

    // Function to handle form submission for updating profile
    $('#updateProfileForm').submit(function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the values from the form fields
        var age = $('#age').val();
        var dob = $('#dob').val();
        var contact = $('#contact').val();

        // Perform AJAX request to update profile
        $.ajax({
            url: 'update_profile.php', // Replace 'update_profile.php' with your actual backend endpoint
            method: 'POST',
            data: {
                age: age,
                dob: dob,
                contact: contact
            },
            success: function(response) {
                // Handle successful profile update
                console.log('Profile updated successfully');
                // Display success message to user (optional)
                alert('Profile updated successfully.');
            },
            error: function(xhr, status, error) {
                // Handle error when updating profile
                console.error('Error updating profile:', error);
                // Display error message to user (optional)
                alert('Failed to update profile. Please try again.');
            }
        });
    });
});