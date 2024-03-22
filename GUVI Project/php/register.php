<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Handle form submission
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Perform validation (not shown here)

    // Connect to MySQL database
    $servername = "localhost";
    $db_username = "mysql_username";
    $db_password = "mysql_password";
    $database = "mysql_database";

    $conn = new mysqli($servername, $db_username, $db_password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    // Execute the statement
    $stmt->execute();

    // Close statement and connection
    $stmt->close();
    $conn->close();

    echo "Registration successful!";
}
?>
