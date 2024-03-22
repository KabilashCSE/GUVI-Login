<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

// Replace this with your MongoDB connection string
$connectionString = "mongodb+srv://kabilashpv2021cseb:Fanabiki@1017@cluster0.eoqxmn3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoDB client
$mongoClient = new MongoDB\Client($connectionString);

// Select database
$db = $mongoClient->selectDatabase("<database>");

// Check if user is logged in
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["token"])) {
    // Retrieve user data from MongoDB using the provided token
    $token = $_GET["token"];

    // Select collection
    $collection = $db->selectCollection("users");

    // Search for user by token
    $user = $collection->findOne(["token" => $token]);

    // Check if user exists
    if ($user) {
        // Display profile information
        echo "<h1>Welcome, " . $user["username"] . "!</h1>";
        echo "<p>Email: " . $user["email"] . "</p>";
        echo "<p>Age: " . $user["age"] . "</p>";
        echo "<p>Date of Birth: " . $user["dob"] . "</p>";
        echo "<p>Contact: " . $user["contact"] . "</p>";

        // You can include additional profile details here as needed
    } else {
        echo "User not found!";
    }
} else {
    echo "Unauthorized access!";
}
?>
