<?php
$host = "localhost";
$user = "root"; // default user
$pass = "";     // default password is empty
$db = "ewaste_app";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
